import React from 'react'
import {View,Text,Linking} from 'react-native'
import Styles from './Styles'

class Palestra extends React.Component{

    render(){
        return(
            <View style={Styles.back}>
                <Text style={Styles.title}>{this.props.title}</Text>
                <Text style={{textAlign:'center'}}onPress={()=> Linking.openURL(url=this.props.link)}>Clique aqui</Text>
                <View style={Styles.line}></View>
                <Text>{this.props.local}</Text>
            </View>
        )
    }
}

export default Palestra