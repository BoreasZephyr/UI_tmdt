const API_URL = 'http://localhost:4000/api/v1';

const baseQuery = {
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
        return headers;
    },
    credentials: 'include',
}

export default baseQuery;