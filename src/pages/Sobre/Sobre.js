import React from 'react'
import {View,
        Text,
        Linking,
        Image,
        Dimensions,
        TouchableOpacity,
        ScrollView} from 'react-native'
import ViewPager from '@react-native-community/viewpager'
import {images, colors} from '../../utils/const'
import Styles from './Styles'

import Palestrantes from './palestrantes'

let viewPager
class Sobre extends React.Component{

    

    constructor(){

        super()

        this.state = {
            page: 0,
            loop: true
        }    

        viewPager = React.createRef()

    }
    
    componentDidMount(){

        this.startLoop()

    }

    componentWillUnmount(){

        this.setState({
            loop:false
        })

    }

    startLoop(){

        if(this.state.loop)
            setTimeout(() => {

                if(this.state.page >= 4){
                    this.setState({
                        page: 0
                    })
                }else{
                    this.setState({
                        page: this.state.page + 1
                    })
                }
                
              //  viewPager.current.setPage(this.state.page)

                console.log("oi")
               // this.startLoop()
            }, 3000)

    }
    
    render(){
        const width = Dimensions.get('window').width
        return(
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ images.detail } style={{ width: width/3 , height: width/3}} />
                    <Text style={ Styles.title } >Sobre o evento</Text>
                </View>

                    <Text style={ Styles.about }>A Semana de Educação é um evento de natureza científica que tem como áreas de Educação e Pedagogia. A sua organização surgiu no passado, em conferências, grupos de trabalho, minicursos, apresentação de comunicações de trabalhos científicos e oficinas.</Text>

                    <View style={{ marginVertical: 20 }}>
                        <Text style={ Styles.titlePalestrante }>Palestrantes - Deslize para ver mais</Text>
                        <ViewPager style={ Styles.palestrante } initialPage={0} ref={this.viewPager}>
                            {Palestrantes.map((person) => {
                                return(
                                    <View key={person.id} >
                                        <TouchableOpacity activeOpacity={1} onPress={() => (person.link.length == 0)? null:Linking.openURL(person.link)} style={{ alignItems: 'center'}}>
                                            <Image style={ Styles.photo } source={ person.image }/>
                                            <Text style={ Styles.nome }>{person.nome}</Text>
                                            <Text style={ Styles.universidade }>{person.universidade}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </ViewPager>
                    </View>

                    <View>
                        <Text style={ Styles.titlePalestrante }>Organização</Text>
                        <Image style={{ width: '90%', height: 80, alignSelf: 'center'}} source={images.organizacao} resizeMode='contain'/>
                    </View>

                    <View>
                        <Text style={ Styles.titlePalestrante }>Patrocínio</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('https://sapiens-psi.com.br/')}>
                            <Image style={{ width: '50%', height: 80, alignSelf: 'center',}} source={images.logoSapiens}
                                    resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={ Styles.contato }>Contato e Links Úteis</Text>
                    <View style={Styles.sites}>
                        <TouchableOpacity style={ Styles.icons } onPress={() => Linking.openURL('https://www.instagram.com/sedu.2019/')}>
                            <Image source={images.instagramIcon} style={ Styles.icons }/>
                            <Text style={ Styles.iconsText }>Instagram</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ Styles.icons } onPress={() => Linking.openURL('http://www.uel.br/eventos/semanadaeducacao/')}>
                            <Image source={images.siteIcon} style={ Styles.icons }/>
                            <Text style={ Styles.iconsText }>Site do evento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/sedulondrina/')}>
                            <Image source={images.facebookIcon} style={ Styles.icons } resizeMode='contain'/>
                            <Text style={ Styles.iconsText }>Facebook</Text>
                        </TouchableOpacity>                    
                    </View>
                    <View style={[Styles.sites, {marginTop: 10}]}>
                        <TouchableOpacity style={ Styles.icons } onPress={() => Linking.openURL('http://www.uel.br/pos/mestredu/')}>
                            <Image source={images.siteIcon} style={ Styles.icons }/>
                            <Text style={ Styles.iconsText }>Site do PPDU</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ Styles.icons } onPress={() => Linking.openURL('http://www.uel.br/ceca/pedagogia/')}>
                            <Image source={images.siteIcon} style={ Styles.icons }/>
                            <Text style={ Styles.iconsText }>Site do</Text>
                            <Text style={ Styles.iconsText }>Departamento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ Styles.icons } onPress={() => Linking.openURL('http://www.uel.br/revistas/uel/index.php/educanalise')}>
                            <Image source={images.siteIcon} style={ Styles.icons }/>
                            <Text style={ Styles.iconsText }>Site da Revista</Text>
                        </TouchableOpacity>
                    </View>

            
            </ScrollView>
        )
    }

}

export default Sobre