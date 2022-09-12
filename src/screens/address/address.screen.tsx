import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {HeaderComponent} from '../../components/header/header.component';
import {Button, TextInput} from 'react-native-paper';
import {addressStyle} from './address.style';

interface AddressScreenProps {
    navigation: any
}

export const AddressScreen = (props: AddressScreenProps) => {

    const destinations: number[] = [1, 2]

    const loadDeliveryPricing = () => props.navigation.navigate('Delivery')

    return (
        <SafeAreaView>
            <HeaderComponent
                title={'Address'}
                hasBackButton={true}
                navigation={props.navigation}
            />
            <View style={addressStyle.marginHorizontal}>
                <TextInput
                    label={'Origin'}/>
                {
                    destinations.map((destination: number, index: number) =>
                        <TextInput
                            key={`destination${index}`}
                            label={'Destination'}
                            right={
                                destinations.length > 1 ?
                                    <TextInput.Icon
                                        name={'close'}
                                        color={addressStyle.buttonIconRemove.color}
                                        style={addressStyle.buttonIconRemove}
                                    />
                                    : null
                            }
                        />
                    )
                }
            </View>
            <View>
                <Button
                    icon={'plus'}
                    style={addressStyle.buttonIconAdd}
                    labelStyle={addressStyle.buttonIconAddLabelStyle}
                >
                </Button>
            </View>
            <Button
                mode={'contained'}
                uppercase={false}
                style={addressStyle.readyButtonStyle}
                labelStyle={addressStyle.readyButtonLabelStyle}
                onPress={loadDeliveryPricing}
            >
                Ready
            </Button>
        </SafeAreaView>
    );
};