import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: '#fff',
    },

    newsCard: {
        backgroundColor: 'white',
        borderRadius: 4,
        marginBottom: 5,
        marginTop: 10
    },
    newsCardNoPicture: {
        backgroundColor: 'white',
        borderRadius: 4,
        marginBottom: 5,
        marginTop: 10
    },
    newsCardImage: {
        height: 150,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    newsCardContent: {
        padding: 5,
    },
    newsCardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    newsCardDesc: {
        fontSize: 14
    }

})

export default Styles