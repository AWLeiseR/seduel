import React from 'react'
import {View,
        Text,
        Linking,
        TouchableOpacity} from 'react-native'
import Styles from './Styles'

class Palestra extends React.Component{

    render(){
        return(
            <TouchableOpacity onPress={()=> Linking.openURL(url=this.props.link)} style={Styles.back}>
                <Text style={Styles.title}>{this.props.title}</Text>
                <View style={Styles.line}></View>
                <Text>{this.props.local}</Text>
            </TouchableOpacity>
        )
    }
}

export default Palestra