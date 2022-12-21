import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const payment = auction.injectEndpoints({
  endpoints: (builder) => ({
    getStripeApi: builder.query({
      query: () => "stripeapi",
      providesTags: ["Payment"],
    }),
    process: builder.mutation({
      query: (paymentData) => ({
        url: "/payment/process",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["Payment"],
    }),
  }),
  overrideExisting: false,
});

export const { useProcessMutation } = payment;
