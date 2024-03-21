import { baseApi } from "../../api/baseApi";


const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query({
            query: () => ({
                url: '/academic-semester',
                method: 'GET',
              
            }),
        }),
    })

})

const { use} = academicSemesterApi;