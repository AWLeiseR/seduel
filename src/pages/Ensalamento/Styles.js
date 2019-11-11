import{ StyleSheet,Dimensions, StatusBar } from 'react-native'
import { colors, fonts } from '../../utils/const'

const valueWidth=Dimensions.get('window').width

const valueHeight=Dimensions.get('window').height

console.log(StatusBar.currentHeight)

const Styles=StyleSheet.create({

    screenTitle:{
        position: 'absolute',
        fontFamily: fonts.bold,
        fontSize: valueHeight / 18,
        right: 15
    },

    headerImage:{

        width: valueWidth/3 ,
        height: valueWidth/3

    },

    title:{
        fontFamily: fonts.bold,
        fontSize: valueHeight / 30,
        textAlign: 'center',
        marginBottom: valueWidth / 15
    },

    button:{

        alignItems: 'center',
        

    },

    btnText:{

        fontFamily: fonts.bold,
        fontSize: valueHeight / 35
        
    },

    btnSubtitle:{

        fontFamily: fonts.semibold,
        fontSize: valueHeight / 45
        
    },  

    separator:{
        backgroundColor: 'black',
        alignSelf: 'center',
        height: 1,
        width: valueWidth/2,
        marginVertical: valueWidth / 35
    },

    background:{
        width:valueWidth,
        height:valueHeight/3*1.25,        
    },

    buttonModal:{
        width:valueWidth/1.5,
        height: valueHeight/25,
        backgroundColor:colors.def_orange,
        borderRadius:valueWidth/50,
        alignSelf:'center',
        margin:valueHeight/50,
        justifyContent:'center'
    },

    hideText:{
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width / 27,
        color:colors.def_white,
        textAlign:'center'
    },

    bottomImage:{
        width: '100%',
        height: valueHeight / 5,
        position: 'absolute',
        bottom: valueHeight / 15
    }

})

export default Styles