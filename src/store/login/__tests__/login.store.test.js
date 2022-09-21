import {loginReducer} from '../login.reducers';
import {
    recoverPassword,
    recoverPasswordFail,
    recoverPasswordSuccess
} from '../login.actions';
import {AppInitialState} from '../../AppInitialState';

describe('Login store', () => {

    it('recoverPassword', () => {
        const initialState = {...AppInitialState.login}
        const newState = loginReducer(initialState, recoverPassword())

        expect(newState).toEqual({
            ...AppInitialState.login,
            isRecoveringPassword: true,
        })
    })

    it('recoverPasswordSuccess', () => {
        const initialState = {
            error: null,
            isLoggedIn: false,
            isLoggingIn: false,
            isRecoveredPassword: false,
            isRecoveringPassword: true,
        }
        const newState = loginReducer(initialState, recoverPasswordSuccess())

        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false,
        })
    })

    it('recoverPasswordFail', () => {
        const initialState = {
            ...AppInitialState.login,
            isRecoveringPassword: true,
        }
        const error = {message: 'error'}
        const newState = loginReducer(initialState, recoverPasswordFail(error))

        expect(newState).toEqual({
            ...initialState,
            error,
            isRecoveredPassword: false,
            isRecoveringPassword: false,
        })
    })
})