import React from 'react';
import {SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {homeStyle} from './home.style';
import {FAB} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {
    ConfirmDeliveryCardComponent
} from '../../components/confirm-delivery-card/confirm-delivery-card.component';
import {
    SearchingDeliveryComponent
} from '../../components/searching-delivery/searching-delivery.component';
import {HeaderComponent} from '../../components/header/header.component';

interface HomeScreenProps {
    navigation: any
    state: number
}

export const HomeScreen = (props: HomeScreenProps) => {

    const goToDeliveryRoute = () => props.navigation.navigate('DeliveryRoute')

    const state: number = props.state || 1;

    return (
        <SafeAreaView style={homeStyle.flex}>
            <HeaderComponent
                title={'Delivery App'}
                navigation={props.navigation}
            />
            <MapView style={homeStyle.flex}
                     testID={'mapView'}
                     initialRegion={{
                         latitude: 53.904541,
                         longitude: 27.561523,
                         latitudeDelta: 0.09,
                         longitudeDelta: 0.04,
                     }}
            >
                {state === 1 ?
                    <>
                        <Marker description={'Bike 1'}
                                coordinate={{latitude: 53.916652, longitude: 27.549566}}

                        >
                            <MaterialCommunityIcons name="bike" size={24}
                                                    color={homeStyle.icon.color}/>
                        </Marker>
                        <Marker description={'Bike 2'}
                                coordinate={{latitude: 53.913987, longitude: 27.552659}}

                        >
                            <MaterialCommunityIcons name="bike" size={24}
                                                    color={homeStyle.icon.color}/>
                        </Marker>
                        <Marker description={'Bike 3'}
                                coordinate={{latitude: 53.912650, longitude: 27.571401}}

                        >
                            <MaterialCommunityIcons name="bike" size={24}
                                                    color={homeStyle.icon.color}/>
                        </Marker>
                        <Marker description={'Bike 4'}
                                coordinate={{latitude: 53.898379, longitude: 27.543362}}

                        >
                            <MaterialCommunityIcons name="bike" size={24}
                                                    color={homeStyle.icon.color}/>
                        </Marker>
                    </>
                    : null}
            </MapView>
            {state === 1 ?
                <FAB icon={'plus'} style={homeStyle.fab} onPress={goToDeliveryRoute}/>
                : null}
            {state === 2 ?
                <ConfirmDeliveryCardComponent/>
                : null}
            {state === 3 ?
                <SearchingDeliveryComponent/>
                : null}
        </SafeAreaView>
    );
};