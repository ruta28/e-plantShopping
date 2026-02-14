import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {

    // ✅ Add Item Reducer
    addItem: (state, action) =>
    {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (existingItem)
      {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      }
      else
      {
        // If item doesn't exist, add new item with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // ✅ Remove Item Reducer
    removeItem: (state, action) =>
    {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // ✅ Update Quantity Reducer
    updateQuantity: (state, action) =>
    {
      const { name, amount } = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === name
      );

      if (existingItem)
      {
        existingItem.quantity = amount;
      }
    },
  },
});

// ✅ Export Actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export Reducer
export default CartSlice.reducer;
