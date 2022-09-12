import React from 'react';
import {SafeAreaView} from 'react-native';
import {HeaderComponent} from '../../components/header/header.component';
import MapView from 'react-native-maps';
import {deliveryStyle} from './delivery.style';
import {Avatar, Card, List, Text} from 'react-native-paper';
import {SimpleLineIcons} from '@expo/vector-icons';

interface DeliveryScreenProps {
    navigation?: any
}

export const DeliveryScreen = (props: DeliveryScreenProps) => {
    return (
        <SafeAreaView style={deliveryStyle.flex}>
            <HeaderComponent
                title={'Delivery details'}
                hasBackButton={true}
                navigation={props.navigation}
            />
            <MapView
                initialRegion={{
                    latitude: 53.904541,
                    longitude: 27.561523,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                }}
                style={deliveryStyle.flex}>

            </MapView>
            <Card>
                <Card.Title
                    title={'99/99/9999'}
                    titleStyle={deliveryStyle.cardTitle}
                    right={() =>
                        <Text
                            style={deliveryStyle.price}
                        >$ 30.00</Text>
                    }>
                </Card.Title>
                <Card.Content>
                    <List.Item
                        title={'Denis Shubin'}
                        description={'7 deliveries'}
                        left={() =>
                            <Avatar.Image
                                style={deliveryStyle.avatar}
                                size={52}
                                source={() => <SimpleLineIcons name="user" size={30}
                                                               color="black"/>}
                            />
                        }
                    />
                    <List.Item
                        title={'Origin'}
                        description={'Origin street, 60'}
                        left={() =>
                            <List.Icon icon={'flag-outline'}/>
                        }
                    />
                    <List.Item
                        title={'Destination'}
                        description={'Destination street, 60'}
                        left={() =>
                            <List.Icon icon={'flag-checkered'}/>
                        }
                    />
                </Card.Content>
            </Card>
        </SafeAreaView>
    );
};
