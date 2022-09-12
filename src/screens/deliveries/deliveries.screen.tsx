import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {HeaderComponent} from '../../components/header/header.component';
import {deliveriesStyle} from './deliveries.style';

interface DeliveriesScreenProps {
    navigation?: any
}

export const DeliveriesScreen = (props: DeliveriesScreenProps) => {

    const deliveries: number[] = [1, 2, 3, 4, 5]

    const goToDeliveryDetails = () => props.navigation.navigate('Delivery')

    return (
        <SafeAreaView>
            <HeaderComponent
                title={'My deliveries'}
                hasBackButton={true}
                navigation={props.navigation}
            />
            <FlatList
                data={deliveries}
                keyExtractor={(item, index) =>
                    `deliveries${index}`}
                renderItem={({item, index}) =>
                    <Card
                        style={{...deliveriesStyle.card, ...deliveriesStyle.cardStatus}}
                        onPress={goToDeliveryDetails}
                    >
                        <Card.Cover
                            source={require('../../../assets/img.png')}/>
                        <Card.Title
                            titleStyle={deliveriesStyle.cardTitle}
                            title={'99/99/9999'}
                            subtitle={'Delivery person name'}
                            right={() =>
                                <Text style={deliveriesStyle.price}>$ 30.00</Text>}/>
                    </Card>
                }/>
        </SafeAreaView>
    );
};