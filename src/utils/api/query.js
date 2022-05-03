import axios from 'axios';
import { baseURL } from './baseURL';

export const createQuery = (waterSourceName) => {
    return {
        'name': waterSourceName
    }
}

export const performQuery = async (query) => {
    const result = await axios.post(`http://localhost:5000/api/v1/query`, query);

    return result
}