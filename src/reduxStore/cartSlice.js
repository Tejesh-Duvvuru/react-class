import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      //vanilla redux(old redux) we can't update state (mutate) directly
      //   const newState = [..state]
      //   newState.items.push(action.payload)
      //   return newState

      //    Redux toolkit
      //    we have to mutate the state
      //behinde the secen redux doing immutabele above vanilla redux
      //this entire procees is handel by the immer(immer is a )
      state.items.push(action.payload);
    },
    clearItem: (state) => {
      state.items.length = 0;
      //we can also write below
      // return {items:[]}   with this we are retuning new state
    },
  },
});

// console.log("sliceeeeeeeeeeeeeeeeeeeeeeeeee", cartSlice);

export const { addItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
