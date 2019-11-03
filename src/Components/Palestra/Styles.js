import {StyleSheet, Dimensions} from  'react-native'
import {colors} from '../../utils/const'

const valueWidth=Dimensions.get('screen').width

const valueHeight=Dimensions.get('screen').height

const Styles=StyleSheet.create({
    back:{
        backgroundColor:colors.def_blueOpacity,
        borderRadius:valueWidth/20,
        width:valueWidth/1.2,
        height:valueHeight/5,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        padding:valueWidth/20,
        marginBottom:valueHeight/35

    },
    title:{
        fontWeight:'bold',
        textAlign:'center'
    },
    line:{
        width:valueWidth/1.5,
        height:1,
        backgroundColor:colors.def_blue,
    }
})

export default Styles