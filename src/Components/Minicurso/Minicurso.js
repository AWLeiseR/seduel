import React from'react'
import {View,
        Text,
        FlatList,
    TouchableOpacity} from 'react-native'
import Styles from './Styles'

class Minicurso extends React.Component{
    constructor(){
        super()
        this.state={
            visible:false,
            text:'Mostrar Objetivo'
        }
    }

    showObject(){
        if(this.state.visible){
            return(<Text>{this.props.descricao}</Text>)
        }
    }

    changeBool(value){
        return !value
    }
    changeText(){
        if(this.state.visible){
            return 'Mostrar Objetivo'
        }else{
            return 'Esconder Objetivo'
        }
    }
    render(){
        
        return(
            <View style={Styles.back}>
                <Text>{this.props.titulo}</Text>
                <FlatList data={this.props.autores}
                    renderItem={({item})=><Text>{item}</Text>}/>
                    {this.showObject()}
                    <TouchableOpacity onPress={()=>this.setState({visible:this.changeBool(this.state.visible),text:this.changeText()})}style={Styles.button}>
                        <Text style={{color:'white'}}>{this.state.text}</Text>
                    </TouchableOpacity>
                    <Text>{this.props.local}</Text>
            </View>
        )
    }
}
export default Minicurso