import {StyleSheet, Dimensions} from 'react-native'
import {colors} from '../../utils/const'

const valueWidth=Dimensions.get('screen').width
const valueHeight=Dimensions.get('screen').height

const Styles=StyleSheet.create({
    banner:{
        width:valueWidth,
        height:valueHeight/3*1.212121,
    },
    timer:{
        width:valueWidth,
        height:valueHeight/5,
        borderStyle:'dashed',
        borderColor:colors.def_blue,
        borderWidth:4,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },
    menuBar:{
        justifyContent:'space-between',
    },
    button:{
        width:valueWidth/4,
        height:valueHeight/10
    }
})

export default Styles