import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instanse = axios.create({
    baseURL: 'http://dee8dbf7afb8.ngrok.io',
});

instanse.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instanse;