import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {images} from '../../utils/const'
import Styles from './Styles'

class Inicio extends React.Component{

    render(){
        return(
            <View>
                <Image source={images.banner3x} style={Styles.banner}/>
                <View style={Styles.timer}>
                    <Text>Timer</Text>
                </View>
                <View style={Styles.menuBar}>
                    <TouchableOpacity style={Styles.button} onPress={()=>null}>
                        <Image sorce={images.icon}/>
                        <Text>Noticias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>null}>
                        <Image sorce={images.icon}/>
                        <Text>Mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>null}>
                        <Image sorce={images.icon}/>
                        <Text>Programação</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Inicio