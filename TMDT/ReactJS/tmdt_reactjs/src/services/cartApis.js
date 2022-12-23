import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const cart = auction.injectEndpoints({
  endpoints: (builder) => ({
    newCart: builder.mutation({
      query: (formData) => ({
        url: "/cart/new",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Cart"],
    }),
    getCarts: builder.query({
      query: () => "/carts",
      providesTags: ["Cart"],
    }),
    getCartById: builder.query({
      query: (id) => `/cart/${id}`,
      providesTags: ["Cart"],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useNewCartMutation,
  useGetCartsQuery,
  useGetCartByIdQuery,
  useDeleteCartMutation,
} = cart;
