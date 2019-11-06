import{ StyleSheet,Dimensions, StatusBar } from 'react-native'
import { colors, fonts } from '../../utils/const'

const valueWidth=Dimensions.get('window').width

const valueHeight=Dimensions.get('window').height

const statusBarMargin = (StatusBar.currentHeight > 30)? ( (valueHeight/8) - StatusBar.currentHeight + 10):(valueHeight/8.5)

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

    buttons:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-around',
        width:valueWidth,
        height:valueHeight/12,
    },
    button:{
        width:valueWidth/5,
        height:valueHeight/16,
        backgroundColor:colors.def_blue,
        borderRadius:valueWidth/10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:4

    },

    flatList:{
        width: '100%',
        height: valueHeight - (valueWidth/3) - statusBarMargin

    },

    btnText:{
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width / 27,
        color:colors.def_white,
        textAlign:'center'
    },

    timeHeader:{

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'

    },

    timeText:{
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width / 29
    },

    line:{
        width:valueWidth/1.2,
        height: 1,
        backgroundColor:colors.def_blue,
        marginHorizontal:1
    },
    buttonModal:{
        width:valueWidth/1.5,
        height: valueHeight/25,
        backgroundColor:colors.def_orange,
        borderRadius:valueWidth/50,
        alignSelf:'center',
        margin:valueHeight/50,
        justifyContent:'center'
    }

})

export default Styles