import axios                               from 'axios'
import router                              from '@/router'
import store                               from '../store/index'
import {UPDATE_USER_DATA, USER_LOGGED_OUT} from '@/app/constants/action-type'
import {EXCEPT_ROUTES} from '@/app/constants/enums'

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    timeout: 15000,
    headers: {
        Accept: 'application/json',
    },
})

const getAuthToken = () => {
    return 'Bearer ' + store.state.token
}
const getUserState = () => {
    return store.state.user.state ?? ''
}

const authInterceptor = (config) => {

    if (!EXCEPT_ROUTES.includes(config.url)) {
        config.headers['Authorization'] = getAuthToken()
        config.headers['state-version'] = getUserState()
    }

    return config
}

httpClient.interceptors.request.use(authInterceptor)

// interceptor to catch errors
const errorInterceptor = (error) => {
    // vue.$notifyError('Network or Server Error');
    // check if it's a server error
    if (!error.response) {
        return Promise.reject(error)
    }

    // all the error responses
    switch (error.response.status) {
        case 400:
            console.error(error.response.status, error.message)
            break

        case 401:
            store.dispatch(USER_LOGGED_OUT)
            router.push({name: 'Login'})
            break

        case 419: // unknown
            break
        case 499: // unknown
            console.log('State version mismatch.')
            store.dispatch(UPDATE_USER_DATA)
            break
        default:
            console.error(error.response.status, error.message)
    }
    return Promise.reject(error)
}

// Interceptor for responses
const responseInterceptor = (response) => {
    switch (response.status) {
        case 200:
            // yay!
            break
        // any other cases
        default:
        // default case
    }
    return response
}

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor)

export default httpClient
