import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseQuery from './serviceConfig';

export const auction = createApi({
    reducerPath: 'auction',
    baseQuery: fetchBaseQuery(baseQuery),
    tagTypes: [],
    endpoints: () => ({}),
});