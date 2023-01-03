import axios from 'axios';
import { baseURL } from './baseURL';

export const submitData = async (data) => {
    const result = await axios({
        method: 'post',
        url: `${baseURL}/submit`,
        data: data
    });

    return result
}