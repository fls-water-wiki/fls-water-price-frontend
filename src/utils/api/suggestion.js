import axios from 'axios';
import { baseURL } from './baseURL';

export const createSuggestion = (waterSourceName) => {
    return {
        'name': waterSourceName
    }
}

export const sendSuggestion = async (query) => {
    const result = await axios({
        method: 'post',
        url: `${baseURL}//suggestion`,
        data: query
    });

    return result
}