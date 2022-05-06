import axios from 'axios';
import { baseURL } from './baseURL';

export const getAllData = async () => {
    const result = await axios({
        method: 'get',
        url: `${baseURL}/data`,
    });

    return result
}