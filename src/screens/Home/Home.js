import React from 'react'
import { StatusBar } from 'react-native';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import styles from './Home.style';
import horoscopeList from '../../utils/constant';
import HoroscopeCard from '../../components/HoroscopeCard';

const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#eeeeee' barStyle='dark-content'/>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>Choose a Sign</Text>

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

export default Home;


