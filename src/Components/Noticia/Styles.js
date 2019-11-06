import {
    StyleSheet,
    Dimensions,
} from 'react-native'

const Styles = StyleSheet.create({

    Image:{
        width: Dimensions.get('screen').width/1.05,
        height: Dimensions.get('screen').height/3.2,
        marginTop: Dimensions.get('screen').height/80,
        resizeMode: 'contain'
    },
    container: {
        alignItems: 'center',
        paddingHorizontal: Dimensions.get('screen').width/30
    },
    ScrollView: {
        marginHorizontal: 20,
        marginBottom: 2
    },
    Text: {
        fontSize: 18,
        textAlign: 'center'
    },
    newsCardContent: {
        padding: 5,
    },
    newsCardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    newsCardDesc: {
        fontSize: 14
    }

})

export default Styles