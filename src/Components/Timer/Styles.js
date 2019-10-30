import {StyleSheet, Dimensions} from  'react-native'

const Styles=StyleSheet.create({
    text:{
        fontSize: Dimensions.get('screen').fontScale*16
    },
    Number:{
        fontSize: Dimensions.get('screen').fontScale*18,
        fontWeight: 'bold',
        fontFamily: 'arial'
    }
})

export default Styles