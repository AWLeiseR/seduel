import {StyleSheet,Dimensions} from 'react-native'

const valueWidth=Dimensions.get('screen').width

const valueHeight=Dimensions.get('screen').height

const Styles=StyleSheet.create({
    palestrante:{
        flexDirection:'column',
        alignItems:'center'
    },
    sites:{
        flexDirection:'row',
        justifyContent:'space-around',
       
    }
})

export default Styles