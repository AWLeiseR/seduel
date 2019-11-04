import React,{useState} from 'react'
import {View,
        Text,
        Image,
        Dimensions,
        FlatList,
    TouchableOpacity,
    Modal} from 'react-native'
import {colors,images,prog} from '../../utils/const'
import Palestra from '../../Components/Palestra/Palestra'
import Styles from './Styles'



class Programacao extends React.Component{
    constructor(){
        super()
        this.state={
            color1:colors.def_orange,
            color2:colors.def_white,
            color3:colors.def_white,
            color4:colors.def_white,
            dia:0
        }
    }

    resetColor(num){
        this.setState({color1:colors.def_white,
            color2:colors.def_white,
            color3:colors.def_white,
            color4:colors.def_white})
            this.changeColor(num)
    }

    changeColor(num){
        switch(num){
            case '1':
                this.setState({color1:colors.def_orange,dia:0})
                break;
            case '2':
                this.setState({color2:colors.def_orange,dia:1})
                break;
            case '3':
                this.setState({color3:colors.def_orange,dia:2})
                break;
            case '4':
                this.setState({color4:colors.def_orange,dia:3})
                break;
    
        }
    }
    render(){

        return(
            <View>
                <Modal isVisible={false}>

                </Modal>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ images.detail} style={ Styles.headerImage } />
                    <Text style={ Styles.screenTitle } >Programação</Text>
                </View>

                <View style={Styles.buttons}>
                    <TouchableOpacity onPress={()=> this.resetColor('1')} style={[Styles.button,{borderColor:this.state.color1}]}>
                        <Text style={Styles.btnText}>11/11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.resetColor('2')} style={[Styles.button,{borderColor:this.state.color2}]}>
                        <Text style={Styles.btnText}>12/11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.resetColor('3')} style={[Styles.button,{borderColor:this.state.color3}]}>
                        <Text style={Styles.btnText}>13/11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.resetColor('4')} style={[Styles.button,{borderColor:this.state.color4}]}>
                        <Text style={Styles.btnText}>14/11</Text>
                    </TouchableOpacity>
                </View>
                
                <FlatList
                    style={ Styles.flatList }
                    data={prog[this.state.dia].palestras}
                    renderItem={({item})=>
                        <View >
                            
                            <View style={ Styles.timeHeader }>
                                <Text style={ Styles.timeText }>{item.horario}</Text>
                                <View style={Styles.line}></View>
                            </View>
                            
                            {item.palestra.map(item => {
                                return <Palestra title={item.titulo} link={item.link}  local={item.local}/>
                            })}
                    
                        </View>
                    }
                    keyExtractor={item => item.horario}/>            
                
            </View>
        )
    }
}

export default Programacao