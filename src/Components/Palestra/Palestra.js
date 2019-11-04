import React from 'react'
import {View,
        Text,
        Linking,
        TouchableOpacity} from 'react-native'
import Styles from './Styles'

class Palestra extends React.Component{
    constructor(){
        super()
        this.state={
            url=this.props.link
        }
    }
    verificaUrl(){
        if(this.state.url==''){
            return null
        }else{
            return this.state.url
        }
    }
    render(){
        return(
            <TouchableOpacity onPress={()=> Linking.openURL(this.state.url)} style={Styles.back}>
                <Text style={Styles.title}>{this.props.title}</Text>
                <View style={Styles.line}></View>
                <Text>{this.props.local}</Text>
                <Text>Local</Text>
            </TouchableOpacity>
        )
    }
}

export default Palestra