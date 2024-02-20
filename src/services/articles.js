import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
    reducerPath: 'articlesApi', // The name of the slice
    baseQuery: fetchBaseQuery({ 
        baseUrl: '' // The base URL for your API
}),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`,
        })
    })
});

//params are the parameters that you want to pass to the query