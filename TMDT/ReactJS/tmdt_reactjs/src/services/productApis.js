import { auction } from "./auctionBaseApi";

// For [GET] --> use builder.query
// For [POST, PUT, DELETE] --> use builder.mutation
const product = auction.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ page=1, keyword, minPrice, maxPrice, sortEnd, category }) => {
                let baseProductApi = `products?page=${page}`;

                if(keyword) baseProductApi = `${baseProductApi}&keyword=${keyword}`;

                if(minPrice) baseProductApi = `${baseProductApi}&currentPrice[gte]=${minPrice}`;

                if(maxPrice) baseProductApi = `${baseProductApi}&currentPrice[lte]=${maxPrice}`;

                if(category) baseProductApi = `${baseProductApi}&category=${category}`;

                if(sortEnd) baseProductApi = `${baseProductApi}&sort=${sortEnd}`;

                return baseProductApi;
            }
        }),
        getProduct: builder.query({
            query: (id) => `product/${id}`,
        }),
        getTop5Products: builder.query({
            query: () => `/products/top5`,
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useGetTop5ProductsQuery,
} = product;