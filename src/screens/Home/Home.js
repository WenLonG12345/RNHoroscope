import React from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import styles from './Home.style';
import horoscopeList from '../../utils/constant';
import HoroscopeCard from '../../components/HoroscopeCard';

const Home = () => {

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

export default Home;


