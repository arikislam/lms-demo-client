import httpClient from './client';

const USER_LOGIN_END_POINT = 'login';
const USER_REGISTER_END_POINT = 'register';
const LOGOUT_END_POINT = 'logout';

const postUserLogin = (payload) => httpClient.post(USER_LOGIN_END_POINT, payload);
const postUserRegister = (payload) => httpClient.post(USER_REGISTER_END_POINT, payload);
const postLogout = () => httpClient.post(LOGOUT_END_POINT);


export {
    postUserLogin,
    postLogout,
    postUserRegister
}
