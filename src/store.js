// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import cart reducer
import cartReducer from './CartSlice';

// Create a Redux store using configureStore
const store = configureStore({
    // Define root reducer
    reducer: {
        // 'cart' is the slice name
        cart: cartReducer,
    },
});

// Export store
export default store;
