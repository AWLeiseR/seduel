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
            return(
            <View>
                <Text style={{paddingLeft:5,marginBottom:5}}>Objetivo:</Text>
                <Text style={Styles.descricao}>{this.props.descricao}</Text>
            </View>
            )
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
                <Text style={Styles.titulo}>{this.props.titulo}</Text>
                <Text >Autores:</Text>
                <FlatList data={this.props.autores}
                    renderItem={({item})=><Text style={{marginBottom:4}}>{item}</Text>} 
                    keyExtractor={item=>item}/>
                     <Text style={{textAlign:'center',marginBottom:4}}>{this.props.local}</Text>
                    {this.showObject()}
                    <TouchableOpacity onPress={()=>this.setState({visible:this.changeBool(this.state.visible),text:this.changeText()})}
                        style={Styles.button}>
                        <Text style={{color:'white'}}>{this.state.text}</Text>
                    </TouchableOpacity>
                   
            </View>
        )
    }
}
export default Minicurso