import{StyleSheet,Dimensions} from 'react-native'
import {colors} from '../../utils/const'

const valueWidth=Dimensions.get('screen').width

const valueHeight=Dimensions.get('screen').height

const Styles=StyleSheet.create({
    buttons:{
        flexDirection:'row',
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        width:valueWidth/1.5,
        height:valueHeight/20,
        marginBottom:valueHeight/20
    },
    button:{
        width:valueWidth/6,
        height:valueHeight/20,
        backgroundColor:colors.def_blue,
        borderRadius:valueWidth/10,
        margin:valueWidth/30,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3
        //alignContent:'space-around'

    },
    text:{
        color:colors.def_white
    },
    line:{
        width:valueWidth/1.2,
        height:1,
        backgroundColor:colors.def_blue,
        alignSelf:'center',
        marginHorizontal:valueWidth/30,
    },
    container:{
        marginBottom:valueHeight/10
    }

})

export default Styles