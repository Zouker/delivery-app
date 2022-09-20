import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/login/login.screen';
import {HomeScreen} from './screens/home/home.screen';
import {RegisterScreen} from './screens/register/register.screen';
import {AddressScreen} from './screens/address/address.screen';
import {DeliveriesScreen} from './screens/deliveries/deliveries.screen';
import {DeliveryScreen} from './screens/delivery/delivery.screen';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}} initialRouteName={'Login'}>
                <Screen name={'Login'} component={LoginScreen}></Screen>
                <Screen name={'Home'} component={HomeScreen}></Screen>
                <Screen name={'Register'} component={RegisterScreen}></Screen>
                <Screen name={'DeliveryRoute'} component={AddressScreen}></Screen>
                <Screen name={'Deliveries'} component={DeliveriesScreen}></Screen>
                <Screen name={'Delivery'} component={DeliveryScreen}></Screen>
            </Navigator>
        </NavigationContainer>
    );
};