import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

export const baseApi = createApi({
  reducerPath: "todolistApi",
  baseQuery: async (args, api, extraOption) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set("API-KEY", import.meta.env.VITE_API_KEY)
      },
    })(args, api, extraOption)
    return result
  },
  endpoints: () => ({}),
})
