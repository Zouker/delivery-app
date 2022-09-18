import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import {loginStyle} from './login.style';

interface LoginScreenProps {
    navigation: any
}

export const LoginScreen = (props: LoginScreenProps) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = () => props.navigation.navigate('Home')
    const register = () => props.navigation.navigate('Register')


    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Card>
                    <Card.Title titleStyle={loginStyle.cardTitle}
                                title={'Delivery App'}/>
                    <Card.Content>
                        <TextInput
                            label={'Email'}
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={email => setEmail(email)}
                        />
                        <TextInput
                            label={'Password'}
                            secureTextEntry
                            value={password}
                            onChangeText={password => setPassword(password)}
                        />
                        <Button
                            uppercase={false}
                            style={loginStyle.cardButton}>Forgot Email/Password</Button>
                        <Button
                            onPress={login}
                            mode={'contained'}
                            style={loginStyle.cardButton}
                            testID={'loginButton'}>
                            Login</Button>
                        <Button
                            onPress={register}
                            style={loginStyle.cardButton}
                            testID={'registerButton'}>
                            Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
};