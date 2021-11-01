import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home/Home';
import HoroscopeDetail from './HoroscopeDetail/HoroscopeDetail';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false}} />
                <Stack.Screen name='Details' component={HoroscopeDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;
