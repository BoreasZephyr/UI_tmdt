import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const auth = auction.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (formData) => ({
        url: "/login",
        method: "POST",
        body: formData,
      }),
    }),
    register: builder.mutation({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),
    getProfile: builder.query({
      query: () => "/me",
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: (formData) => ({
        url: "/me/update",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Profile"],
    }),
    updatePassword: builder.mutation({
      query: (formData) => ({
        url: "/password/update",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation
} = auth;
