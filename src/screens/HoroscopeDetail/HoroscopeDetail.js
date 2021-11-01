import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { horoscopeRequest } from '../../store/action';

const HoroscopeDetail = ({ route, horoscopeModel }) => {

    const dispatch = useDispatch();

    const { horoscope: selectedHoroscope } = route.params;

    // const { current_data, description, compatibility, mood, color, lucky_number, lucky_time } = data;

    useEffect(() => {
        const selectedSign = selectedHoroscope.title.toLowerCase()
        dispatch(horoscopeRequest({
            sign: selectedSign, day: 'today'
        }))

    }, [])

    return (
        <View>
            {horoscopeModel.loading ?
                <ActivityIndicator size={100}/>
                : <Text>{JSON.stringify(horoscopeModel.data)}</Text>
            }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        horoscopeModel: state.horoscope
    };
}


export default connect(mapStateToProps)(HoroscopeDetail);
