import _helper from '@/app/extra/helper'

import {
    SET_USER,
    SET_AUTH_TOKEN,
    RESET_USER,
    SET_SIDEBAR_OPEN,
    SET_EXPIRY,
    SET_ADMIN
} from '@/app/constants/mutations-types'

import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    UPDATE_USER_DATA,
    TOGGLE_SIDEBAR,
    UPDATE_STATE,
} from '@/app/constants/action-type'
import { getUserInfo } from '@/app/api/user.api'

export default {
    [USER_LOGGED_IN]({ commit }, data) {
        let { token, user, isSidebarOpen, expiry, isAdmin} = data
        console.log(data);
        _helper.setCookie('lms-demo', token, 100)
        commit(SET_USER, user)
        commit(SET_AUTH_TOKEN, token)
        commit(SET_SIDEBAR_OPEN, isSidebarOpen)
        commit(SET_EXPIRY, expiry)
        commit(SET_ADMIN , isAdmin)

    },

    [USER_LOGGED_OUT]({ commit }) {
        commit(RESET_USER)
        _helper.removeCookie('lms-demo')
    },

    [UPDATE_USER_DATA]({ commit }) {
        getUserInfo()
            .then(({ data: { data } }) => {
                let { user, isSidebarOpen, expiry } =
                    data
                commit(SET_USER, user)
                commit(SET_SIDEBAR_OPEN, isSidebarOpen)
                commit(SET_EXPIRY, expiry)
            })
            .finally(() => {
                window.location.reload()
            })
    },

    [UPDATE_STATE]({ commit }, data) {
        let { user, isSidebarOpen, expiry} = data
        commit(SET_USER, user)
        commit(SET_SIDEBAR_OPEN, isSidebarOpen)
        commit(SET_EXPIRY, expiry)
    },

    [TOGGLE_SIDEBAR]({ commit }, data) {
        commit(SET_SIDEBAR_OPEN, data)
    },
}
