import {StyleSheet,Dimensions} from 'react-native'
import { colors, fonts } from '../../utils/const'

const valueWidth=Dimensions.get('screen').width

const valueHeight=Dimensions.get('screen').height

const Styles=StyleSheet.create({

    title:{
        position: 'absolute',
        fontFamily: fonts.bold,
        fontSize: valueHeight / 20,
        right: 15
    },

    about:{
        fontFamily: fonts.regular,
        fontSize: valueWidth / 25,
        textAlign: 'center'
    },

    titlePalestrante:{

        fontFamily: fonts.bold,
        fontSize: valueWidth / 30,
        marginLeft: 5

    },

    palestrante:{
        
        width: valueWidth,
        height: valueHeight / 4.8,

        alignSelf: 'center',

        flexDirection:'column',
        alignItems:'center',
        padding: 5,
        marginTop: 10

    },

    contato:{

        fontFamily: fonts.bold,
        fontSize: valueWidth / 20,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10

    },

    sites:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom: 10
       
    },

    icons:{
        alignSelf: 'center',
        
    },

    photo:{
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black'
    },

    nome:{
        fontFamily: fonts.bold,
        fontSize: valueWidth / 20,
    },

    universidade:{
        fontFamily: fonts.bold,
        fontSize: valueWidth / 30,
    },

    iconsText:{
        fontFamily: fonts.bold,
        fontSize: valueWidth / 30,
        textAlign: 'center'
    }

})

export default Styles