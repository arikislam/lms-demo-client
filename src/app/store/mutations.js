import {
    SET_AUTH_TOKEN,
    RESET_USER,
    SET_USER_DATA,
    SET_USER,
    SET_STATE,
    RESET_STATE,
    SET_SIDEBAR_OPEN,
    SET_EXPIRY, SET_ADMIN,

} from '@/app/constants/mutations-types'

export default {
    [SET_EXPIRY](state, expiry) {
        state.expiry = expiry
    },

    [SET_USER_DATA](state, data) {
        state.user = {
            ...state.user,
            ...data,
        }
    },

    [SET_USER](state, data) {
        state.user = data
    },

    [RESET_USER](state) {
        state.user = null
        state.token = null
        state.menu = []
        state.expiry = null
        state.access = []
    },

    [SET_AUTH_TOKEN](state, token) {
        state.token = token
    },

    [SET_STATE](state, data) {
        Object.assign(state, data)
    },

    [RESET_STATE](state) {
        Object.assign(state, {})
    },

    [SET_SIDEBAR_OPEN](state, isSidebarOpen) {
        state.isSidebarOpen = isSidebarOpen
    },

    [SET_ADMIN](state, data) {
        state.isAdmin = data
    }
}
