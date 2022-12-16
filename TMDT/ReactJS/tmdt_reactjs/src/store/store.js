import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { auction } from '../services/auctionBaseApi';

const store = configureStore({
    reducer: {
        [auction.reducerPath]: auction.reducer,
    },  
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(auction.middleware),
});

setupListeners(store.dispatch);

export default store;