import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import horoscopeList from '../utils/constant';

const LoveIcon = require('../assets/icons/love.png')

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    },
    container: {
        marginVertical: 15,
        alignItems: 'center'
    },
    loveIcon: {
        width: 70, height: 70, alignSelf: 'center', marginHorizontal: 20
    },
    horoIcon: {
        width: 100, height: 100, marginVertical: 5
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    card: (backgroundColor) => ({
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: backgroundColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#404040',
        alignItems: 'center',
        padding: 10
    })
})

const CompatibilitySection = ({ originalTitle, compatTitle }) => {

    const original = horoscopeList.find(item => item.title === originalTitle)
    const compat = horoscopeList.find(item => item.title === compatTitle)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Compatibility</Text>
            <View style={styles.itemContainer}>
                <View style={styles.card(original.backgroundColor)}>
                    <Image source={original.url} style={styles.horoIcon} />
                    <Text>{original.title}</Text>
                    <Text>{original.date}</Text>
                </View>

                <Image source={LoveIcon} style={styles.loveIcon} />
                <View style={styles.card(compat.backgroundColor)}>
                    <Image source={compat.url} style={styles.horoIcon} />
                    <Text>{compat.title}</Text>
                    <Text>{compat.date}</Text>
                </View>
            </View>

        </View>
    )
}

export default CompatibilitySection;

