import React from 'react'
import {View,
        Text,
        Image,
        TouchableOpacity,
        Dimensions,
        StatusBar} from 'react-native'
import {images, colors} from '../../utils/const'
import Styles from './Styles'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { DateTime } from 'luxon'
import Mapa from '../Mapa/Mapa'
import Noticias from'../Noticias/Noticias'
import Programacao from '../Programacao/Programacao'
import Sobre from '../Sobre/Sobre'
import Countdown from '../../Components/Timer/Timer'
import Noticia from '../../Components/Noticia/Noticia'

class Inicio extends React.Component{

    render(){
        return(
            <View>
                <StatusBar backgroundColor={colors.def_white} barStyle='dark-content'/>
                <Image source={images.banner3x} style={Styles.banner} resizeMode='stretch'/>
                <View style={Styles.timer}>
                    <Countdown end={DateTime.fromISO('2019-11-11T16:00:00-03:00')} />
                </View>


                <View style={Styles.menuBar}>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Noticias')}>
                        <Image source={images.noticiasIcon}/>
                        <Text>Noticias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Mapa', this.props.navigation.navigate)}>
                        <Image source={images.mapIcon}/>
                        <Text>Mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Programacao')}>
                        <Image source={images.programacaoIcon}/>
                        <Text>Programação</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={ Styles.buttonSobre } onPress={()=>this.props.navigation.navigate('Sobre')}>
                    <Text style={ Styles.aboutText }>Sobre o evento</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    Inicio: {
      screen: Inicio,
    },
    Mapa: {
        screen: Mapa,
     },
    Noticias: {
        screen: Noticias,
    },
    Programacao:{
        screen: Programacao,
    },
    Sobre:{
        screen: Sobre,
    },
    'Notícia Inteira':{
        screen: Noticia
    }
  },
  {
    initialRouteName: 'Inicio',
    headerMode: 'none'
  })

export default createAppContainer(AppNavigator)