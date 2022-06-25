import httpClient from './client'

const USER_END_POINT = 'user'
const INFO_END_POINT = 'info'
const getUserInfo = () => httpClient.get(USER_END_POINT + '/' + INFO_END_POINT)

export {getUserInfo}
