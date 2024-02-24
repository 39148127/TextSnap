import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize', // add a comma here
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'rapidAPIKey');
            headers.set('X-RapidAPI-Host', 
            'https://article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => '/summarize?url={params.articlesUrl}&length=5',
        })
    })
});

export const { useGetSummaryQuery } = articleApi;