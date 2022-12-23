import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const order = auction.injectEndpoints({
  endpoints: (builder) => ({
    newOrder: builder.mutation({
      query: (formData) => ({
        url: "/order/new",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Order"],
    }),
    getOrderById: builder.query({
      query: (id) => `/order/${id}`,
      providesTags: ["Order"],
    }),
  }),
  overrideExisting: false,
});

export const { useNewOrderMutation, useGetOrderByIdQuery } = order;
