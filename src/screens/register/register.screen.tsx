import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {registerStyle} from './register.style';
import {HeaderComponent} from '../../components/header/header.component';

interface RegisterScreenProps {
    navigation: any
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    const register = () => props.navigation.navigate('Home')

    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent title={'Register'}/>
                <View style={registerStyle.content}>
                    <TextInput label={'Name'}/>
                    <TextInput label={'Email'} keyboardType={'email-address'}/>
                    <TextInput label={'Password'} secureTextEntry
                               right={<TextInput.Icon name={'eye-off-outline'}
                                                      color={registerStyle.icon.color}
                               />}/>
                    <TextInput label={'Confirm password'} secureTextEntry
                               right={<TextInput.Icon name={'eye-off-outline'}
                                                      color={registerStyle.icon.color}
                               />}/>
                    <TextInput label={'Phone number'} keyboardType={'phone-pad'}/>
                    <Button
                        onPress={register}
                        mode={'contained'}
                        style={registerStyle.button}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};