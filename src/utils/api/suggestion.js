import axios from 'axios';

export const createSuggestion = (waterSourceName) => {
    return {
        'name': waterSourceName
    }
}

export const sendSuggestion = async (query) => {
    const result = await axios({
        method: 'post',
        url: "http://localhost:5000/api/v1/suggestion",
        data: query
    });

    return result
}