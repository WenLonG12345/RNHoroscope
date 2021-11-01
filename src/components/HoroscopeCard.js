import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { horoscopeRequest } from '../store/action';

const styles = StyleSheet.create({
    container: (backgroundColor) => ({
        backgroundColor: backgroundColor,
        width: '45%',
        flex: 0.5,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 20,
        marginHorizontal: 5
    }),
    image: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    text: {
        fontSize: 18
    },
    chip: {
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 10
    },
    chipText: {
        fontSize: 12
    }
})

const HoroscopeCard = ({ horoscope }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container(horoscope.backgroundColor)}
            onPress={() => {
                navigation.navigate('Details', {
                    horoscope: horoscope
                })
            }}
        >
            <Image source={horoscope.url} style={styles.image} />
            <Text style={styles.text}>{horoscope.title}</Text>
            <View style={styles.chip}>
                <Text style={styles.chipText}>{horoscope.date}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default HoroscopeCard;


