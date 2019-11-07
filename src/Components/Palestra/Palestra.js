import React from 'react'
import {View,
        Text,
        Linking,
        TouchableOpacity} from 'react-native'
import Styles from './Styles'

class Palestra extends React.Component{
    constructor(){
        super()
       
    }
  
    render(){
        if(this.props.link == 'minicurso' || this.props.link == 'roda'){
            return(
                <TouchableOpacity onPress={()=> this.props.callback(this.props.link)} style={Styles.back}>
                    <Text style={Styles.title}>{this.props.title}</Text>
                    <View style={Styles.line}></View>
                    <Text style={Styles.nomeLocal}>{this.props.local}</Text>
                    <Text style={Styles.local}>Local</Text>
                    <Text style={Styles.info}>Toque aqui para mais informações</Text>
                </TouchableOpacity>
            )
        }else{
            return(
                <View style={Styles.back}>
                    <Text style={Styles.title}>{this.props.title}</Text>
                    <View style={Styles.line}></View>
                    <Text style={Styles.nomeLocal}>{this.props.local}</Text>
                    <Text style={Styles.local}>Local</Text>
                </View>
            )
        }
       
    }
}

export default Palestra