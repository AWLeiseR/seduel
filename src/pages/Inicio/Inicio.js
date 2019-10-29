import React from 'react'
import {View,Text,Image} from 'react-native'
import {images} from '../../utils/const'
import Styles from './Styles'

class Inicio extends React.Component{

    render(){
        return(
            <View>
                <Image source={images.banner}/>
            </View>
        )
    }
}

export default Inicio