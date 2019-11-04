import React from 'react'
import {View,Text,Linking,Image,Dimensions} from 'react-native'
import {images} from '../../utils/const'
import Styles from './Styles'

class Sobre extends React.Component{
    
    render(){
        const width = Dimensions.get('window').width
        return(
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ images.detail} style={{ width: width/3 , height: width/3}} />
                    <Text style={{ marginLeft: width/30, fontSize: width/10 }} >Sobre</Text>
                </View>

                <Text>Palestrante</Text>
                <View style={Styles.palestrante}>
                    <Text style={Styles.text} onPress={() => Linking.openURL(url='https://www.uevora.pt/pessoas/(id)/25932 ')}>Ana Artur - Universidade de Évora - Portugal</Text>
                    <Text style={Styles.text} onPress={() => Linking.openURL(url='https://www.uevora.pt/pessoas/(id)/5101')}>Assunção Folque Universidade de Évora - Portugal </Text>
                    <Text style={Styles.text} onPress={() => Linking.openURL(url='http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4780705Y6')}>Gaudêncio Frigotto - UERJ</Text>
                    <Text>Maria Isabel Mena Garcia </Text>
                </View>
                <Text>Contato</Text>
                <View style={Styles.sites}>
                    <Text style={Styles.text} onPress={() => Linking.openURL(url='http://www.uel.br/eventos/semanadaeducacao/')}>Site Oficial</Text>
                    <Text style={Styles.text} onPress={() => Linking.openURL(url='https://www.facebook.com/sedulondrina/')}>FACEBOOK</Text>
                </View>
            </View>
        )
    }

}

export default Sobre