import {StyleSheet, Dimensions} from 'react-native'
import { colors, fonts } from '../../utils/const'


export const menuWidth = Dimensions.get('window').width / 1.05
export const menuHeight = Dimensions.get('window').height / 12
const btnMargin = Dimensions.get('window').width / 32
export const bottomMargin = Dimensions.get('window').height / 35

const Styles=StyleSheet.create({

    map:{
        width: '100%',
        height: '100%'
    },

    menuWrapper:{
        
        position: 'absolute',
        bottom: bottomMargin,
        alignSelf: 'center'
        
    },

    menu:{

        backgroundColor: colors.def_blue,
        
        borderRadius: 50,

        flexDirection: 'row',
        alignItems: 'center',
        
        paddingHorizontal: 25,

    },

    txtButton:{
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width/23,
        color: colors.def_white
    },


    infoContainer:{
        height: Dimensions.get('window').width/1.8 + (menuHeight / 2),
        width: menuWidth,
        backgroundColor: colors.def_white,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,

        marginBottom: bottomMargin*1.2,

        padding: Dimensions.get('window').width/30

    },

    infoTitle: {
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width/18,
    },

    infoSubtitle:{
        fontFamily: fonts.regular,
        fontSize: Dimensions.get('window').width/26
    },

    routeBtn:{
        position: 'absolute',
        backgroundColor: colors.def_orange,
        borderRadius:50,

        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',

        alignSelf: 'center',

        height: menuHeight/1.5,
        width: menuWidth/3.2,

        bottom: bottomMargin*2.2
    },

    routeText:{
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width/30,
        color: colors.def_white,
        textAlign: 'center',
        marginRight: Dimensions.get('window').width/60
    },

    routeIcon:{

        height: menuHeight/2,
        width: menuHeight/2

    },

    searchView:{

        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.30)',
        width: '100%',
        height: '100%',

        alignItems: 'center'

    },

    searchContainer:{

        position: 'absolute',
        bottom: bottomMargin, 

        height: Dimensions.get('window').width * 1.2,
        width: menuWidth,
        backgroundColor: colors.def_white,
        borderRadius: 15,

        justifyContent: 'space-between',

        padding: Dimensions.get('window').width/30


    },

    textInput:{
        fontFamily: fonts.regular,
        fontSize: Dimensions.get('window').width / 26,

        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    },

    itemText:{

        fontFamily: fonts.semibold,
        fontSize: Dimensions.get('window').width/20,
        marginBottom: 5,
        
    },

    separator:{
        height: 1,
        marginBottom: 5,
        width: Dimensions.get('window').width / 3,
        backgroundColor: 'black'
    },

    flatList:{

        marginVertical: Dimensions.get('window').width / 12

    },

    backBtn:{

        // height: menuHeight/1.5,
        // width: menuWidth/3.2,

        backgroundColor: colors.def_blue,
        borderRadius:50,
        
        alignSelf: 'center',
        justifyContent: 'center'

    },

    backText:{
        fontFamily: fonts.bold,
        fontSize: Dimensions.get('window').width/30,
        color: colors.def_white,
        textAlign: 'center',
    }


})

export default Styles