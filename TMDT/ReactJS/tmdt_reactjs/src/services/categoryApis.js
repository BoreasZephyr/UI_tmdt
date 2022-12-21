import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const category = auction.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
        query: () => 'categories',
    }),
  }),
  overrideExisting: false,
});

export const {
    useGetCategoriesQuery,
} = category;
