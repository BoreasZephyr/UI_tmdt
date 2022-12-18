import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const auth = auction.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
        query: (formData) => ({
            url: '/login',
            method: 'POST',
            body: formData,
        }),
    }),
    register: builder.mutation({
      query: (formData) => ({
          url: '/register',
          method: 'POST',
          body: formData,
      }),
  })
  }),
  overrideExisting: false,
});

export const {
    useLoginMutation,
    useRegisterMutation,
} = auth;
