import axios from 'axios';
import { baseURL } from './baseURL';

export const submitData = async (query) => {
    const result = await axios({
        method: 'post',
        url: `${baseURL}//suggestion`,
        data: query
    });

    return result
}