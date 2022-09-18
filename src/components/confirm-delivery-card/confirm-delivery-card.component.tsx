import React from 'react';
import {Button, Card, List} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {View} from 'react-native';
import {confirmDeliveryCardStyle} from './confirm-delivery-card.style';

export const ConfirmDeliveryCardComponent = () => {
    return (
        <Card
        testID={'confirmDeliveryCard'}>
            <Card.Content>
                <List.Item
                    title={'$ 15.00'}
                    description={'Total price'}
                    left={() =>
                        <MaterialCommunityIcons name="bike" size={24}
                                                color={confirmDeliveryCardStyle.icon.color}/>
                    }
                    right={() =>
                        <View>
                            <Button
                                style={confirmDeliveryCardStyle.cancelButton}>Cancel</Button>
                            <Button mode={'contained'}>Confirm</Button>
                        </View>
                    }
                />
            </Card.Content>
        </Card>
    );
};