import axios from 'axios';
import { IP_ADDRESS } from 'react-native-dotenv';

console.log(IP_ADDRESS);
const api = axios.create({
    baseURL: 'http://192.168.1.8:3333',
});

export default api;
