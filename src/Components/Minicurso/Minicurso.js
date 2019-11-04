import React from'react'
import {View,Text,FlatList} from 'react-native'
import Styles from './Styles'

class Minicurso extends React.Component{
    render(){
        return(
            <View style={Styles.back}>
                <Text>{this.props.titulo}</Text>
                <FlatList data={this.props.autores}
                    renderItem={({item})=><Text>{item}</Text>}/>
                    <Text>{this.props.descricao}</Text>
                    <Text>{this.props.local}</Text>
            </View>
        )
    }
}
export default Minicurso