import React, { useEffect } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { horoscopeRequest } from '../../store/action';
import { useNavigation } from '@react-navigation/core';
import ImageColors from 'react-native-image-colors';
import styles from './Home.style';
import horoscopeList from '../../utils/constant';
import HoroscopeCard from '../../components/HoroscopeCard';

const pisces = require('../../assets/icons/Pisces.png');

const Home = ({horoscope}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    // const { data } = state.horoscope;
    // const { current_data, description, compatibility, mood, color, lucky_number, lucky_time } = data;
    // useEffect(() => {
    //     dispatch(horoscopeRequest({
    //         sign: 'scorpio', day: 'today'
    //     }))

    // }, [])

    // console.log({horoscope});


    return (
        <SafeAreaView style={styles.container}>
            <Text>Choose a Sign</Text>

            <View style={styles.cardContainer}>
                <FlatList
                    data={horoscopeList}
                    renderItem={({ item }) => (
                        <HoroscopeCard horoscope={item} />
                    )}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        horoscope: state.horoscope
    };
}

export default connect(mapStateToProps)(Home);


