import React from 'react'
import {View,Text} from 'react-native'
import Styles from './Styles'

class Palestra extends React.Component{

    render(){
        return(
            <View style={Styles.back}>
                <Text style={Styles.title}>Titulo</Text>
                <Text>ASSUNTO</Text>
                <View style={Styles.line}></View>
                <Text>LOCAL</Text>
            </View>
        )
    }
}

export default Palestra