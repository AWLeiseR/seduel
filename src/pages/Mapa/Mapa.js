import React, { useState, useEffect } from 'react'
import {View,
        Text,
        TouchableOpacity,
        Image,
        TextInput,
        FlatList,
        Linking,
        Animated} from 'react-native'

import MapView, { PROVIDER_GOOGLE,
    Marker } from 'react-native-maps'

import Geolocation from 'react-native-geolocation-service'
import mapBackhandler from '../../utils/backhandler'
import Styles, { menuHeight, menuWidth, bottomMargin } from './Styles'
import DATA from './localData'

const menuStatus = {
    CLOSED: 1,
    SEARCH: 2,
    INFO:3 
}


let globalInfo = {nomeLocal:'', descricao:'', latlng:{latitute:0, longitude: 0}}
let userLocation = {}

function InfoMenu({ userLocation }){

    const sendToGMaps = () => {
        const URL = 'https://www.google.com.br/maps/dir/' + userLocation.latitude + ',' + userLocation.longitude + '/' + globalInfo.latlng.latitude + ',' + globalInfo.latlng.longitude
        Linking.openURL(URL)
    }

    return(
        <View style={ Styles.menuWrapper }>

            <View style={ Styles.infoContainer }>
                <Text style={{ fontFamily: 'Avenir Roman', color:'gray' }}>em destaque</Text>
                <Text style={ Styles.infoTitle }>{globalInfo.nomeLocal}</Text>
                <Text numberOfLines={4} style={ Styles.infoSubtitle }>{globalInfo.descricao}</Text>

                <TouchableOpacity activeOpacity={0.8} style={ Styles.routeBtn } onPress={() => sendToGMaps()}>
                    <Text style={ Styles.routeText }>Obter rota</Text>
                    <Image source={require('../../assets/icons/routeIcon/routeIcon.png')}
                            resizeMode='contain'
                            style={ Styles.routeIcon }/>
                </TouchableOpacity>
            </View>

            

        </View>
    )

}

function SearchItem({ id, title, changeState, item, changeRegion}){

    const setGlobalInfo = () => {
        globalInfo = item
        changeRegion({
            region:{
                latitude: item.latlng.latitude - 0.0025,
                longitude: item.latlng.longitude,
                latitudeDelta: 0.0180, 
                longitudeDelta: 0.0100 
            }
        })
        changeState(true)
    }

    return(
        <TouchableOpacity activeOpacity={0.8} onPress={ () => setGlobalInfo()}>
            <Text style={ Styles.itemText }>{title}</Text>
            <View style={ Styles.separator }/>
        </TouchableOpacity>
    )
}

function SearchMenu({ changeView, changeRegion }){

    const [textInput, changeText] = useState('')

    const sortData = DATA.sort((a, b) => {
        return (a.nomeLocal < b.nomeLocal) ? -1 : (a.nomeLocal > b.nomeLocal) ? 1 : 0
    })

    let filteredData = (textInput === '')? sortData : sortData.filter((item) => {
        return item.nomeLocal.toLowerCase().includes(textInput.toLowerCase())
    })

    return(
        <View style={ Styles.searchView }>

            <View style={ Styles.searchContainer }>

                <View style={{ paddingHorizontal: 10 }}>
                <TextInput
                style={ Styles.textInput }
                placeholder='Digite sua pesquisa...'
                maxLength={80}
                value={textInput}
                onChangeText={changeText}/>
                </View>

                <FlatList
                style={ Styles.flatList }
                data={filteredData}
                renderItem={({ item }) => <SearchItem id = {item.index} title={item.nomeLocal} item={item} changeState={changeView} changeRegion={changeRegion}/>}
                keyExtractor={item => item.index.toString()}/>

                <View style={ { width: menuWidth/3.2, height: menuHeight/1.5 } }/>

                
            </View>

        </View>
    )
    
}

function Mapa( props ){

    useEffect(() => {

        Geolocation.getCurrentPosition(
            (position) => 
            userLocation = {
                latitude : position.coords.latitude,
                longitude : position.coords.longitude    
            },
            (error) => {
                console.log(error)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )

    })

    const [menuState, changeMenu] = useState(menuStatus.CLOSED)

    const [mapRegion, changeMapRegion] = useState({
        region:{
            latitude: -23.324109,
            longitude: -51.201794,
            latitudeDelta: 0.0180, 
            longitudeDelta: 0.0100 
        }
    })

    mapBackhandler(() => { switchScreens(false) },
                () => { props.navigation.navigate('Inicio')},
                menuState)

    // INICIO DA PERSONALIZACAO DA ANIMACAO //

    const animVal = new Animated.Value(0)

    const [ buttonDimension, changeBtnDimension ] = useState({
        width: menuWidth, height: menuHeight, marginBottom: 0
    })

    const [ buttonDimensionEnd, changeBtnDimensionEnd ] = useState({
        width: menuWidth, height: menuHeight, marginBottom: bottomMargin
    })

    const animatedWidth = animVal.interpolate({inputRange:[0,1],outputRange:[buttonDimension.width, buttonDimensionEnd.width]})
    const animatedHeight = animVal.interpolate({inputRange:[0,1],outputRange:[buttonDimension.height, buttonDimensionEnd.height]})
    const animatedMargin = animVal.interpolate({inputRange:[0,1],outputRange:[buttonDimension.marginBottom, buttonDimensionEnd.marginBottom]})

    const animatedTransition = Animated.spring(animVal,{toValue:1})

    const switchScreens = ( isInfo ) => {

        if(isInfo){

            changeBtnDimension({ width: menuWidth/3.2, height: menuHeight/1.5, marginBottom: bottomMargin })
            changeBtnDimensionEnd({ width: menuWidth, height: menuHeight, marginBottom: 0})
            changeMenu(menuStatus.INFO)
            return

        }

        if(menuState == menuStatus.SEARCH){
            changeBtnDimension({ width: menuWidth/3.2, height: menuHeight/1.5, marginBottom: bottomMargin })
            changeBtnDimensionEnd({ width: menuWidth, height: menuHeight, marginBottom: 0})
            changeMenu(menuStatus.CLOSED)
        }else {
            changeBtnDimension({ width: menuWidth, height: menuHeight, marginBottom: 0})
            changeBtnDimensionEnd({ width: menuWidth/3.2, height: menuHeight/1.5, marginBottom: bottomMargin})
            changeMenu(menuStatus.SEARCH)
        }

    }

    const btnText = () => {

        return (menuState == menuStatus.SEARCH)? 
                <Text style={ [Styles.txtButton, {flex:1, textAlign:'center'}] }>Voltar</Text>:
                <>
                <Text style={ Styles.txtButton }>Principais locais</Text>
                <Text style={ Styles.txtButton }>></Text>
                </>
    }

    // FIM DA PERSONALIZACAO DA ANIMACAO //

    const menu = () => {

        switch(menuState){

            case menuStatus.CLOSED:
                animatedTransition.start()
                return <></>

            case menuStatus.SEARCH:       
                animatedTransition.start()
                return <SearchMenu changeView={switchScreens} changeRegion={changeMapRegion}/>
                
            case menuStatus.INFO:
                animatedTransition.start()
                return <InfoMenu changeView={switchScreens} userLocation={userLocation}/>
        }

    }

    return(
        <View>

            <MapView 
                    provider={PROVIDER_GOOGLE}
                    style = { Styles.map }
                    region = {mapRegion.region}>

            {(globalInfo.nomeLocal !== '')? 
                <Marker
                coordinate={globalInfo.latlng}
                title={globalInfo.nomeLocal}
                    />:undefined}
            </MapView>

            {menu()}

            <View style={ Styles.menuWrapper }>
                
                <Animated.View style={ [Styles.menu, {width: animatedWidth, height: animatedHeight, marginBottom: animatedMargin}] }>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%'}}
                    activeOpacity={0.8} onPress={ () => switchScreens(false) }>
                        {btnText()}
                    </TouchableOpacity>
                </Animated.View>

            </View>
          

        </View>
    )
}

export default Mapa