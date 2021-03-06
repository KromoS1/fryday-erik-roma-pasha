import {AppThunkType} from '../../app/Store';
import {authApi, ParamsAuthType} from '../../api/AuthAPI';
import {setUserData} from '../profile/ProfileReducer';
import {setStatusApp} from "../statusApp/StatusAppReducer";

export type LoginAT =
    | ReturnType<typeof setIsAuth>

export interface LoginType {
    isAuth: boolean
}

const initialState: LoginType = {
    isAuth: false,
}

export const setIsAuth = (isAuth: boolean) => ({type: 'LOGIN/SET_IS_AUTH', isAuth} as const);

export const loginReducer = (state = initialState, action: LoginAT): LoginType => {
    switch (action.type) {
        case 'LOGIN/SET_IS_AUTH':
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}

export const loginAccount = (loginParams: ParamsAuthType): AppThunkType => async dispatch => {
    dispatch(setStatusApp('load', ''));
    try {
        const response = await authApi.login(loginParams);
        response.data.token && localStorage.setItem('tokenUser',response.data.token);
        dispatch(setUserData(response.data));
        dispatch(setIsAuth(true));
        dispatch(setStatusApp('success', 'You have successfully signed in to your account.'));
    } catch (error) {
        dispatch(setStatusApp('error', error.message));
    } finally {
        dispatch(setStatusApp('idle', ''));
    }
};

export const logoutAccount = (): AppThunkType => async dispatch => {
    dispatch(setStatusApp('load', ''));
    try {
        await authApi.logout()
            .then(res => {
                if (res.data.info) {
                    dispatch(setIsAuth(false));
                }
            })
    }catch (error) {
        dispatch(setStatusApp('error', error.message));
    }
    finally {
        dispatch(setStatusApp('idle', ''));
    }
}