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
    }
})

const HoroscopeCard = ({ horoscope }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            style={styles.container(horoscope.backgroundColor)}
            onPress={() => {
                // dispatch(horoscopeRequest({
                //     sign: horoscope.title.toLowerCase(),
                //     day: 'today'
                // }))
                navigation.navigate('Details', {
                    horoscope: horoscope
                })
            }}
        >
            <Image source={horoscope.url} style={styles.image} />
            <Text style={styles.text}>{horoscope.title}</Text>
        </TouchableOpacity>
    )
};

export default HoroscopeCard;


