import React from 'react'
import {View,
        Text,
        Image,
        TouchableOpacity,
        Modal} from 'react-native'

import Styles from './Styles'
import PDFView from 'react-native-view-pdf'
import {images, colors} from '../../utils/const'


class Ensalamento extends React.Component {

    state = {
        modal:false,
        urlType: 1
    }

    drawButton(props){

        return(
            <TouchableOpacity style={ Styles.button }
                onPress={() => this.setState({ modal:true , urlType: props.url})}>
                <Text style={ Styles.btnText }>{props.title}</Text>
                <Text style={ Styles.btnSubtitle }>{props.subtitle}</Text>
            </TouchableOpacity>
        )
    }

    getResource = (type) =>{

        console.log(type)

        switch(type){
            case 1:
                return 'http://www.uel.br/eventos/semanadaeducacao/pages/arquivos/ensalamento_SEDU2019_dia12_LISTA%20GERAL_VESPERTINO.pdf'
            case 2:
                return 'http://www.uel.br/eventos/semanadaeducacao/pages/arquivos/ensalamento_SEDU2019_dia13LISTA%20GERAL_NOTURNO.pdf'
            case 3:
                return 'http://www.uel.br/eventos/semanadaeducacao/pages/arquivos/ensalamento_SEDU2019_dia14%20LISTA%20GERAL_MATUTINO.pdf'
        }

    }

    render(){
        return(

            <View flex={1}>

                <Modal visible={this.state.modal} onRequestClose={ () => this.setState({modal:false}) } >
                  
                    <PDFView
                        fadeInDuration={250.0}
                        style={{ flex: 1 }}
                        resource={this.getResource(this.state.urlType)}
                        resourceType={'url'}
                    />

                    <TouchableOpacity style={Styles.buttonModal}onPress={()=>this.setState({modal:false}) }>
                        <Text style={Styles.hideText}>Esconder</Text>
                    </TouchableOpacity>
                    
                </Modal>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ images.detail } style={ Styles.headerImage } />
                    <Text style={ Styles.screenTitle } >Ensalamento</Text>
                </View>

                <Text style={ Styles.title }>Selecione o dia para verificar as informações do ensalamento</Text>

                {this.drawButton({title: '12/11/2019', subtitle: 'Vespertino', url: 1})}
                <View style={ Styles.separator }/>
                {this.drawButton({title: '13/11/2019', subtitle: 'Noturno', url: 2})}
                <View style={ Styles.separator }/>
                {this.drawButton({title: '14/11/2019', subtitle: 'Matutino', url: 3})}

                <Image source={images.backgroundEnsalamento} style={ Styles.bottomImage } resizeMode={'contain'}/>

            </View>            
            
        )
    }

}

export default Ensalamento