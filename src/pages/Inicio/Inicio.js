import React from 'react'
import {View,Text,Image,TouchableOpacity,Dimensions} from 'react-native'
import {images} from '../../utils/const'
import Styles from './Styles'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { DateTime } from 'luxon'
import Mapa from '../Mapa/Mapa'
import Noticias from'../Noticias/Noticias'
import Programacao from '../Programacao/Programacao'
import Countdown from '../../Components/Timer/Timer'

class Inicio extends React.Component{

    render(){
        return(
            <View>
                <Image source={images.banner3x} style={Styles.banner}/>
                <View style={Styles.timer}>
                    <Text style={{ fontSize: Dimensions.get('screen').fontScale*13.5 }}>faltam apenas</Text>
                    <Countdown end={DateTime.fromISO('2019-11-11T16:00:00-03:00')} />
                </View>
                <View style={Styles.menuBar}>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Noticias')}>
                        <Image source={images.icon}/>
                        <Text>Noticias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Mapa')}>
                        <Image source={images.icon}/>
                        <Text>Mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Programacao')}>
                        <Image source={images.icon}/>
                        <Text>Programação</Text>
                    </TouchableOpacity>
                </View>
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
    }
  },
  {
    initialRouteName: 'Inicio',
    headerMode: 'none'
  })

export default createAppContainer(AppNavigator)