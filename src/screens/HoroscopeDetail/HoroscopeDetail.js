import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import CompatibilitySection from '../../components/CompatibilitySection';
import DateSelector from '../../components/DateSelector';
import HoroColumnSection from '../../components/HoroColumnSection';
import LoadingModal from '../../components/LoadingModal';
import { horoscopeRequest } from '../../store/action';
import styles from './HoroscopeDetail.style'

const ClockIcon = require('../../assets/icons/clock.png');
const BackIcon = require('../../assets/icons/back.png')

const HoroscopeDetail = ({ route, horoscopeModel, navigation, dispatch }) => {

    const { horoscope: selectedHoroscope } = route.params;
    const { data: horoData } = horoscopeModel;

    const [date, setDate] = useState('today');

    useEffect(() => {
        const selectedSign = selectedHoroscope.title.toLowerCase()
        dispatch(horoscopeRequest({
            sign: selectedSign, day: date
        }))
    }, [date])

    console.log(horoscopeModel)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: selectedHoroscope.backgroundColor }}>
            <StatusBar backgroundColor={selectedHoroscope.backgroundColor}/>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.iconContainer(selectedHoroscope.backgroundColor)}>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={BackIcon} style={styles.backIcon} />
                        </TouchableOpacity>

                        <View style={styles.horoContainer}>
                            <Image source={selectedHoroscope.url} style={styles.image} />
                            <View style={styles.chip}>
                                <Text style={styles.chipText}>{selectedHoroscope.date}</Text>
                            </View>
                            <View style={styles.chip}>
                                <Image source={ClockIcon} style={styles.icon} />
                                <Text style={styles.chipText}>{horoData.current_date}</Text>
                            </View>
                        </View>

                    </View>

                    <DateSelector date={date} setDate={setDate} />

                    <View style={styles.generalSection}>
                        <Text style={styles.generalTitle}>General Horoscope</Text>
                        <Text style={styles.generalDescription}>{horoData.description}</Text>

                        <HoroColumnSection data={horoData}/>

                        <CompatibilitySection
                            originalTitle={selectedHoroscope.title}
                            compatTitle={horoData.compatibility}
                        />

                    </View>

                </View>

                {horoscopeModel.loading && <LoadingModal />}
            </ScrollView>

        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        horoscopeModel: state.horoscope
    };
}


export default connect(mapStateToProps)(HoroscopeDetail);
