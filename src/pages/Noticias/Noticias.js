import React from 'react'
import {View,
        Text,
        ActivityIndicator,
        FlatList,
        Image} from 'react-native'
import axios from 'axios'
import Styles from './Styles'

class Noticias extends React.Component{

    constructor(){
        super();

        this.state = {
            news: [],
            loading: true,
            done: true
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        axios
        .get('https://backendeducacao.herokuapp.com/posts')
        .then(response => {
            console.log(response.data)
            this.setState({
                news: response.data,
                loading: false,
                done: true
            })
            console.log(this.state.news[0])
        })
        .catch(error => {
            console.log(error)
            this.setState({loading: false, done: false})
        })
    }

    drawCard(noticia){
        return(
            <View style={Styles.newsCard}>
                    <Image style={Styles.newsCardImage} source={{uri: noticia.url }}></Image>
                    <View style={Styles.newsCardContent}> 
                        <Text style={Styles.newsCardTitle}>{ noticia.title }</Text>
                        <Text style={Styles.newsCardDesc}>{ noticia.body }</Text>
                    </View> 
            </View>
        )
    }

    drawCardNoPicture(noticia){
        return(
            <View style={Styles.newsCardNoPicture}>
                    <View style={Styles.newsCardContent}> 
                        <Text style={Styles.newsCardTitle}>{ noticia.title }</Text>
                        <Text style={Styles.newsCardDesc}>{ noticia.body }</Text>
                    </View> 
            </View>
        )
    }

    render(){
        if( !this.state.loading && this.state.done ){
            return(
                <View style={Styles.container}>
                    <FlatList styles = { Styles.wrapper } data={ this.state.news } renderItem={({ item }) => (
                        item.image ? this.drawCard(item) : this.drawCardNoPicture(item) 
                    )}
                    keyExtractor = {item => item._id} />
                </View>
            )
        } else if ( !this.state.loading && !this.state.done ) {
            return(
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', flex: 1 }}>
                    <Text style={ { fontSize: 15 }}>Não foi possível baixar os dados</Text>
                    <Text style={{ fontSize: 20 }}>Cheque sua internet</Text>  
                </View>
            )
        } else if ( this.state.loading ){
            return(
                <View style={[Styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
                    <ActivityIndicator size='large' color='#d9d9d9' />
                </View>
            )
        }
    }
}

export default Noticias