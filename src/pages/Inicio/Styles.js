import {StyleSheet, Dimensions} from 'react-native'
import {colors} from '../../utils/const'

const valueWidth=Dimensions.get('screen').width
const valueHeight=Dimensions.get('screen').height

const Styles=StyleSheet.create({
    banner:{
        width:valueWidth,
        height:valueHeight/3*1.212121,
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
        marginBottom:valueHeight/20
    },
    menuBar:{
        
        justifyContent:'space-around',
        flexDirection:'row'
    },
    button:{
        alignItems:'center',
        width:valueWidth/4,
        height:valueHeight/10
    }
})

export default Styles