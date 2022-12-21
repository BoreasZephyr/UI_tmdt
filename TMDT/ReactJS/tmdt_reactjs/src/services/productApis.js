import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const product = auction.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        limit = 6,
        page = 1,
        keyword,
        minPrice,
        maxPrice,
        sortEnd,
        category,
      }) => {
        let baseProductApi = `products?page=${page}&limit=${limit}`;

        if (keyword) baseProductApi = `${baseProductApi}&keyword=${keyword}`;

        if (minPrice)
          baseProductApi = `${baseProductApi}&currentPrice[gte]=${minPrice}`;

        if (maxPrice)
          baseProductApi = `${baseProductApi}&currentPrice[lte]=${maxPrice}`;

        if (category) baseProductApi = `${baseProductApi}&category=${category}`;

        if (sortEnd) baseProductApi = `${baseProductApi}&sort=${sortEnd}`;

        return baseProductApi;
      },
      providesTags: ["Product"],
    }),
    getProduct: builder.query({
      query: (id) => `product/${id}`,
      providesTags: ["Product"],
    }),
    getTop5Products: builder.query({
      query: () => `/products/top5`,
      providesTags: ["Product"],
    }),
    bidProduct: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/product/${id}/bid`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: (formData) => ({
        url: "/product/new",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetTop5ProductsQuery,
  useAddProductMutation,
  useBidProductMutation,
} = product;
