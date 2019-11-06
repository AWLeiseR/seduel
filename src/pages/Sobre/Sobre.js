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
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ images.detail } style={{ width: width/3 , height: width/3}} />
                    <Text style={ Styles.title } >Sobre o evento</Text>
                </View>


                <ScrollView>
                    <Text style={ Styles.about }>A Semana de Educação é um evento de natureza científica que tem como áreas de Educação e Pedagogia. A sua organização surgiu no passado, em conferências, grupos de trabalho, minicursos, apresentação de comunicações de trabalhos científicos e oficinas.</Text>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={ Styles.titlePalestrante }>Palestrantes</Text>
                        <ViewPager style={ Styles.palestrante } initialPage={0} ref={this.viewPager}>
                            {Palestrantes.map((person) => {
                                return(
                                    <View key={person.id} >
                                        <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL(person.link)} style={{ alignItems: 'center'}}>
                                            <Image style={ Styles.photo } source={{uri: person.image}}/>
                                            <Text style={ Styles.nome }>{person.nome}</Text>
                                            <Text style={ Styles.universidade }>{person.universidade}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </ViewPager>
                    </View>
                    
                    <Text style={ Styles.contato }>Contato</Text>
                    <View style={Styles.sites}>
                        <TouchableOpacity style={ Styles.icons }>
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
                </ScrollView>

            
            </View>
        )
    }

}

export default Sobre