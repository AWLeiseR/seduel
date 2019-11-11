import React from 'react'
import {View,
        Text,
        Image,
        Dimensions,
        ScrollView} from 'react-native'
import Styles from './Styles'

class Noticia extends React.Component {
    render(){
        const info = this.props.navigation.state.params
        let texto = info.texto
        if(info.image) {
            return(
                <View style={Styles.container}>
                    <Image style={Styles.Image} source={{ uri: info.imagem }}></Image>
                    <Text style={ Styles.screenTitle }>{info.titulo}</Text>
                    <View style={{backgroundColor: '#000', width: Dimensions.get('screen').width/1.1, height: 1, marginVertical: 10}}/>
                    <ScrollView style={Styles.ScrollViewSemImagem}>
                        <Text style={Styles.Text}>{texto}</Text>
                    </ScrollView>
                </View>
            )
        }
        else {
            return(
                <View style={Styles.container}>
                    <Text style={{fontSize: 23, fontWeight: 'bold', marginTop: 20, textAlign: 'center'}}>{info.titulo}</Text>
                    <View style={{backgroundColor: '#000', width: Dimensions.get('screen').width/1.1, height: 1, marginVertical: 20}}/>
                    <View style={Styles.body}>
                        <ScrollView style={Styles.ScrollViewSemImagem} scrollEnabled>
                            <View>
                                <Text style={Styles.Text}>{texto}</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }
}

export default Noticia