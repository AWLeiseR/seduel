import{StyleSheet,Dimensions} from 'react-native'
import{colors}from'../../utils/const'

const valueWidth=Dimensions.get('window').width

const valueHeight=Dimensions.get('window').height

const Styles=StyleSheet.create({
    back:{
        backgroundColor:colors.def_blueOpacity,
        alignItems:'center',
        marginBottom:valueHeight/50,
        borderRadius:valueWidth/10,
        width:valueWidth/1.1,
        alignSelf:'center'
    },
    button:{
        width:valueWidth/3,
        height:valueHeight/16,
        backgroundColor:colors.def_blue,
        borderRadius:valueWidth/10,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:valueHeight/50
    },
    titulo:{
        marginTop:valueHeight/40,
        textAlign:'center',
        fontWeight:'bold',
        padding:valueHeight/70
    },
    descricao:{
        textAlign:'center',
        marginBottom:valueHeight/30,
        paddingHorizontal:valueWidth/30
    }
})

export default Styles