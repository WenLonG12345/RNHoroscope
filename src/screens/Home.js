import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {connect, useDispatch} from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'API_REQUEST',
            payload: {
                sign: 'scorpio',
                day: 'today'
            }
        })
    }, [])

    return (
        <View>
           
        </View>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

export default connect(mapStateToProps)(Home);


