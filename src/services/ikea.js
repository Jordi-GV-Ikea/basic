import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import transformerData from '../../utils/transformer';

// const HomepageID = JSON.stringify('45w9g6bachy9-master-2vO2HX5P3SmKPBXyhBuOCl');
const baseUrl = String ('https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/');
const queryURL = JSON.stringify ('app-data?market=netherlands&environment=master');
const market ='netherlands'// JSON.stringify('netherlands');
const environment = 'master'// JSON.stringify('master');

// Return the response filtered by the current market
export const topicApi = createApi({
  reducerPath: 'topics',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTopic: builder.query({
      query: () => `app-data?market=${market}&environment=${environment}`,
      /*  transformResponse(response) {
        const dataSource = response.items.filter(({ id }) => id === HomepageID)[0];
        return transformerData(dataSource);
      }, */
    }),
  }),
});

export const { useGetTopicQuery } = topicApi;


//const dinamicQuery = `app-data?market=${market}&environment=${environment}`
// const urlIkea = "https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/app-data?market=netherlands&environment=master"

