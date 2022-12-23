import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const auth = auction.injectEndpoints({
  endpoints: (builder) => ({
    newCart: builder.mutation({
      query: (formData) => ({
        url: "/cart/new",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Cart"],
    }),
    getCart: builder.query({
      query: () => "/carts",
      providesTags: ["Cart"],
    }),
  }),
  overrideExisting: false,
});

export const { useNewCartMutation, useGetCartQuery } = auth;
