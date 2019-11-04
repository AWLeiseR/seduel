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

class Inicio extends React.Component{

    render(){
        return(
            <View>
                <StatusBar backgroundColor={colors.def_white} barStyle='dark-content'/>
                <Image source={images.banner3x} style={Styles.banner} resizeMode='stretch'/>
                <View style={Styles.timer}>
                    <Text style={{ fontSize: Dimensions.get('screen').fontScale*13.5 }}>faltam apenas</Text>
                    <Countdown end={DateTime.fromISO('2019-11-11T16:00:00-03:00')} />
                </View>
                <View style={Styles.menuBar}>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Noticias')}>
                        <Image source={images.icon}/>
                        <Text>Noticias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Mapa', this.props.navigation.navigate)}>
                        <Image source={images.icon}/>
                        <Text>Mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('Programacao')}>
                        <Image source={images.icon}/>
                        <Text>Programação</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Styles.buttonSobre} onPress={()=>this.props.navigation.navigate('Sobre')}>
                    <Text>Sobre</Text>
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
    }
  },
  {
    initialRouteName: 'Inicio',
    headerMode: 'none'
  })

export default createAppContainer(AppNavigator)