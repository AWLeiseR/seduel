import React, { useState, useEffect } from 'react'
import {View,
        Text,
        TouchableOpacity,
        Image,
        TextInput,
        FlatList,
        Linking} from 'react-native'

import MapView, { PROVIDER_GOOGLE,
    Marker } from 'react-native-maps'

import Geolocation from 'react-native-geolocation-service'
import backhandler from '../../utils/backhandler'
import Styles from './Styles'
import DATA from './TEST'

const menuStatus = {
    CLOSED: 1,
    SEARCH: 2,
    INFO:3 
}

let globalInfo = {nomeLocal:'', descricao:'', latlng:{latitute:0, longitude: 0}}
let globalLocation = {}

function MainMenuComponent({ changeView }){
    return(
        <TouchableOpacity activeOpacity={0.8} style={ Styles.menu } onPress={() => changeView(menuStatus.SEARCH)}>
            <Text style={ Styles.txtButton }>Pesquisar local</Text>
            <Text style={ Styles.txtButton }>></Text>
        </TouchableOpacity>
    )
}

function InfoMenu({ changeView, userLocation }){

    const sendToGMaps = () => {
        const URL = 'https://www.google.com.br/maps/dir/' + userLocation.latitude + ',' + userLocation.longitude + '/' + globalInfo.latlng.latitude + ',' + globalInfo.latlng.longitude
        Linking.openURL(URL)
    }

    return(
        <View style={ Styles.menuWrapper }>

            <View style={ Styles.infoContainer }>
                <Text style={{ fontFamily: 'Avenir Roman' }}>em destaque</Text>
                <Text style={ Styles.infoTitle }>{globalInfo.nomeLocal}</Text>
                <Text numberOfLines={4} style={ Styles.infoSubtitle }>{globalInfo.descricao}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={ Styles.routeBtn } onPress={() => sendToGMaps()}>
                <Text style={ Styles.routeText }>Obter rota</Text>
                <Image source={require('../../assets/icons/routeIcon/routeIcon.png')}
                        resizeMode='contain'
                        style={ Styles.routeIcon }/>
            </TouchableOpacity>

            <MainMenuComponent changeView={changeView} />        

        </View>
    )

}

function SearchItem({ id, title, changeState, item, changeRegion}){

    console.log(changeRegion, "changef")

    const setGlobalInfo = () => {
        globalInfo = item
        changeRegion({
            region:{
                latitude: item.latlng.latitude - 0.0025,
                longitude:item.latlng.longitude,
                latitudeDelta: 0.0180, 
                longitudeDelta: 0.0100 
            }
        })
        changeState(menuStatus.INFO)
    }

    return(
        <TouchableOpacity activeOpacity={0.8} onPress={ () => setGlobalInfo()}>
            <Text style={ Styles.itemText }>{title}</Text>
            <View style={ Styles.separator }/>
        </TouchableOpacity>
    )
}

function SearchMenu({ changeView, changeRegion}){

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
                

                <TouchableOpacity activeOpacity={0.8} style={ Styles.backBtn } onPress={() => changeView(menuStatus.CLOSED)}>
                    <Text style={ Styles.backText }>Voltar</Text>
                </TouchableOpacity>

                
            </View>

        </View>
    )
    
}

function ClosedMenu({ changeView }){
    
    return(
        <View style={ Styles.menuWrapper }>
            <MainMenuComponent changeView={changeView}/>
        </View>
    )

}

function Mapa(){

    useEffect(() => {

        Geolocation.getCurrentPosition(
            (position) => changeUserLocation({
                latitude : position.coords.latitude,
                longitude : position.coords.longitude    
            }),
            (error) => {
                console.log(error)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )

    })

    backhandler(() => { changeMenu(menuStatus.CLOSED) })

    const [menuState, changeMenu] = useState(menuStatus.CLOSED)

    const [userLocation, changeUserLocation] = useState({})

    const [mapRegion, changeMapRegion] = useState({
        region:{
            latitude: -23.324109,
            longitude: -51.201794,
            latitudeDelta: 0.0180, 
            longitudeDelta: 0.0100 
        }
    })

    const menu = () => {

        switch(menuState){
            case menuStatus.CLOSED:
                return <ClosedMenu changeView={changeMenu}/>

            case menuStatus.SEARCH:
                return <SearchMenu changeView={changeMenu} changeRegion={changeMapRegion}/>

            case menuStatus.INFO:
                return <InfoMenu changeView={changeMenu} userLocation={userLocation}/>
        }

    }

    return(
        <View>
            
            <MapView 
                    provider={PROVIDER_GOOGLE}
                    style = { Styles.map }
                    initialRegion={{
                        latitude: -23.324109,
                        longitude: -51.201794,
                        latitudeDelta: 0.0180, 
                        longitudeDelta: 0.0100 
                      }}
                    region = {mapRegion.region}>

            {(globalInfo.nomeLocal !== '')? 
                <Marker
                coordinate={globalInfo.latlng}
                title={globalInfo.nomeLocal}
                    />:undefined}
            </MapView>

            {menu()}

        </View>
    )
}

export default Mapa