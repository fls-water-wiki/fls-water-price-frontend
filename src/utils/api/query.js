import axios from 'axios';
import { baseURL } from './baseURL';

export const createQuery = (waterSourceName) => {
    return {
        'name': waterSourceName
    }
}

export const performQuery = async (query) => {
    const result = await axios.post(`${baseURL}/query`, query);

    return result
}