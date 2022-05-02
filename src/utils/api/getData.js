import axios from 'axios';

export const performQuery = async () => {
    const result = await axios({
        method: 'get',
        url: "http://localhost:5000/api/v1/data",
    });

    return result
}