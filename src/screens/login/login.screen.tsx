import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, Snackbar, Text, TextInput} from 'react-native-paper';
import {loginStyle} from './login.style';
import {Formik} from 'formik';
import {loginForm} from './login.form';
import {LoadingState} from '../../store/loading/LoadingState';
import {connect} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {hide, show} from '../../store/loading/loading.actions';
import {AppState} from '../../store/AppState';
import {
    login,
    loginFail,
    loginSuccess,
    recoverPassword,
    recoverPasswordFail,
    recoverPasswordReset,
    recoverPasswordSuccess
} from '../../store/login/login.actions';
import {LoginState} from '../../store/login/LoginState';
import AuthService from '../../services/AuthService';

interface LoginScreenProps {
    navigation?: any

    loadingState: LoadingState
    loginState: LoginState

    login: Function
    loginFail: Function
    loginSuccess: Function
    recoverPassword: Function
    recoverPasswordFail: Function
    recoverPasswordReset: Function
    recoverPasswordSuccess: Function
    showLoading: Function
    hideLoading: Function
}

const LoginScreen = (props: LoginScreenProps) => {

    const [recoveryEmail, setRecoveryEmail] = useState('');
    const [userLogin, setUserLogin] = useState({email: '', password: ''});

    useEffect(() => {
        if (props.loginState.isRecoveringPassword) {
            props.showLoading();

            AuthService.recoverPassword(recoveryEmail).then(() => {
                props.recoverPasswordSuccess();
            }).catch(error => {
                props.recoverPasswordFail(error);
            })
        } else {
            props.hideLoading();
        }
    }, [props.loginState.isRecoveringPassword])

    useEffect(() => {
        if (props.loginState.isLoggingIn) {
            props.showLoading();

            AuthService.login(userLogin.email, userLogin.password).then(user => {
                props.loginSuccess(user)
            }).catch(error => {
                props.loginFail(error)
            })
        } else {
            props.hideLoading();
        }
    }, [props.loginState.isLoggingIn]);

    useEffect(() => {
        if (props.loginState.isLoggedIn) {
            props.hideLoading();
            props.navigation.navigate('Home')
        }
    }, [props.loginState.isLoggingIn])

    const login = (userLogin: { email: string, password: string }) => {
        setUserLogin(userLogin)
        props.login()
    }
    const register = () => props.navigation.navigate('Register')
    const forgotEmailPassword = (email: string) => {
        setRecoveryEmail(email);
        props.recoverPassword();
    }

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Card>
                    <Card.Title titleStyle={loginStyle.cardTitle}
                                title={'Delivery App'}/>
                    <Card.Content>
                        <Formik initialValues={{email: '', password: ''}}
                                onSubmit={login}
                                validationSchema={loginForm}>
                            {({
                                  handleSubmit,
                                  handleChange,
                                  errors,
                                  setFieldTouched,
                                  touched,
                                  values
                              }) => (
                                <>
                                    <TextInput
                                        label={'Email'}
                                        keyboardType={'email-address'}
                                        onChangeText={handleChange('email')}
                                        onFocus={() => setFieldTouched('email')}
                                        testID={'email'}
                                    />
                                    {touched.email && errors.email ?
                                        <Text testID={'error-email'} style={{
                                            color: 'white',
                                            backgroundColor: 'red'
                                        }}>{errors.email}</Text>
                                        : null}
                                    <TextInput
                                        label={'Password'}
                                        secureTextEntry
                                        onChangeText={handleChange('password')}
                                        onFocus={() => setFieldTouched('password')}
                                        testID={'password'}
                                    />
                                    {touched.password && errors.password ?
                                        <Text testID={'error-password'} style={{
                                            color: 'white',
                                            backgroundColor: 'red'
                                        }}>{errors.password}</Text>
                                        : null}
                                    <Button
                                        onPress={() => forgotEmailPassword(values.email)}
                                        uppercase={false}
                                        style={loginStyle.cardButton}
                                        testID={'recoveryButton'}
                                        disabled={!!(values.email === '' || errors.email)}>
                                        Forgot Email/Password</Button>
                                    <Button
                                        onPress={handleSubmit}
                                        mode={'contained'}
                                        style={loginStyle.cardButton}
                                        testID={'loginButton'}>
                                        Login</Button>
                                    <Button
                                        onPress={register}
                                        style={loginStyle.cardButton}
                                        testID={'registerButton'}>
                                        Register</Button>
                                </>
                            )}
                        </Formik>
                    </Card.Content>
                </Card>
            </View>
            {
                props.loginState.isRecoveredPassword
                    ? <Snackbar
                        duration={5000}
                        visible={true}
                        onDismiss={() => props.recoverPasswordReset()}
                        testID={'recoverPasswordSuccess'}>
                        Recovery email sent
                    </Snackbar>
                    : null
            }
            {
                props.loginState.error
                    ? <Snackbar
                        duration={5000}
                        visible={true}
                        onDismiss={() => props.recoverPasswordReset()}
                        testID={'errorMessage'}>
                        {props.loginState.error.message}
                    </Snackbar>
                    : null
            }
        </SafeAreaView>
    );
};

const mapStateToProps = (store: AppState) => ({
    loadingState: store.loading,
    loginState: store.login
})
const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({
        login: login,
        loginFail: loginFail,
        loginSuccess: loginSuccess,
        recoverPassword: recoverPassword,
        recoverPasswordFail: recoverPasswordFail,
        recoverPasswordReset: recoverPasswordReset,
        recoverPasswordSuccess: recoverPasswordSuccess,
        hideLoading: hide,
        showLoading: show
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);