import {StyleSheet, Dimensions} from 'react-native'
import {colors, fonts} from '../../utils/const'

const valueWidth=Dimensions.get('screen').width
const valueHeight=Dimensions.get('screen').height

const Styles=StyleSheet.create({
    
    banner:{
        width:valueWidth,
        height:valueHeight/3*1.25,
        marginBottom:valueHeight/20
    },

    timer:{
        width:valueWidth/1.1,
        height:valueHeight/7,
        borderStyle:'dashed',
        borderColor:colors.def_blue,
        borderWidth:2,
        borderRadius:0.3,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginBottom:valueHeight/35
    },

    menuBar:{
        
        justifyContent:'space-around',
        flexDirection:'row'

    },

    button:{
        alignItems:'center',
        width:valueWidth/4,
        height:valueHeight/10
    },

    buttonText:{
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width / 30,
    },

    buttonSobre:{

        height: 40,

        padding:6,

        backgroundColor: colors.def_blue,
        borderRadius:50,
        
        alignSelf: 'center',
        justifyContent: 'center',

        marginTop: valueHeight/15
    
    },

    aboutText:{
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width / 30,
        color: colors.def_white
    }

})

export default Styles