import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    iconContainer: (backgroundColor) => ({
        backgroundColor: backgroundColor,
    }),
    horoContainer: {
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
    },
    backIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 10
    },
    icon: {
        width: 15,
        height: 15,
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    chip: {
        borderRadius: 20,
        borderColor: '#404040',
        borderWidth: 1,
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row'
    },
    chipText: {
        marginStart: 5,
        color: 'black'
    },
    generalSection: {
        flex: 1,
        alignItems: 'center'
    },
    generalTitle: {
        fontWeight: 'bold',
        marginVertical: 10
    },
    generalDescription: {
        width: '90%',
        textAlign: 'center'
    }
})