import {
    StyleSheet,
    Dimensions,
} from 'react-native'
import {fonts} from '../../utils/const'

const Styles = StyleSheet.create({

    screenTitle:{

        fontFamily: fonts.bold,
        textAlign:'center',
        fontSize:Dimensions.get('screen').fontScale*13
    },

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

    body: {

        height: Dimensions.get('screen').height/1.2

    },

    ScrollView: {
        paddingHorizontal: 20,
        marginBottom: 2
    },
    Text: {
        fontSize: 18,
        textAlign: 'justify',
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