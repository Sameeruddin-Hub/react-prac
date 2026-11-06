import { api } from '../../../config/api'

export const loginUserApi = async (credentials) => {
    try {
        let res = await api.post('/auth/login', credentials);
        localStorage.setItem('accessToken', res.data.accesstoken)
        return res.data
    } catch (error) {
        console.log('error in login api', error)
    }
}
export const hydrateUser = async () => {
    let token = localStorage.getItem('accessToken')
    console.log(token)
    try {
        let res = await api.get('auth/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log('response from hydration', res)
        return res.data
    } catch (error) {
        console.log('error in hydration api', error)
    }
}