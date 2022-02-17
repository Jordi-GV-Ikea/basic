import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import transformerData from '../../utils/transformer';

const baseApiUrl = JSON.stringify('https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/');
const baseURL = String ('https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/');
// const HomepageID = JSON.stringify('45w9g6bachy9-master-2vO2HX5P3SmKPBXyhBuOCl');
const endURL = JSON.stringify ('app-data?market=netherlands&environment=master');
const market = JSON.stringify('netherlands');
const environment = JSON.stringify('master');
const urlIkea = "https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/app-data?market=netherlands&environment=master"

// Return the response filtered by the current market
export const topicApi = createApi({
  reducerPath: 'topics',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getTopic: builder.query({
      query: () => 'app-data?market=netherlands&environment=master',
     /*  transformResponse(response) {
        const dataSource = response.items.filter(({ id }) => id === HomepageID)[0];
        return transformerData(dataSource);
      }, */
    }),
  }),
});

export const { useGetTopicQuery } = topicApi;
