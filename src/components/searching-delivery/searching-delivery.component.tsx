import React from 'react';
import {ActivityIndicator, Button, Title} from 'react-native-paper';
import {View} from 'react-native';
import {searchingDeliveryStyle} from './searching-delivery.style';

export const SearchingDeliveryComponent = () => {
    return (
        <View style={searchingDeliveryStyle.flexCenterColumn}>
            <ActivityIndicator color={searchingDeliveryStyle.icon.color}
                               animating={true}/>
            <Title style={searchingDeliveryStyle.title}>Searching...</Title>
            <Button
                style={searchingDeliveryStyle.cancelSearchingButton}
                mode={'contained'}>Cancel</Button>
        </View>
    );
};