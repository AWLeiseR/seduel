import{StyleSheet,Dimensions} from 'react-native'
import{colors}from'../../utils/const'

const valueWidth=Dimensions.get('window').width

const valueHeight=Dimensions.get('window').height

const Styles=StyleSheet.create({
    back:{
        backgroundColor:colors.def_blueOpacity,
        alignItems:'center',
        marginBottom:valueHeight/20
    },
    button:{
        width:valueWidth/3,
        height:valueHeight/16,
        backgroundColor:colors.def_blue,
        borderRadius:valueWidth/10,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default Styles