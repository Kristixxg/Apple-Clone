import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { stringify } from "querystring";

export interface BasketState {
  items: Product[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index) {
        newBasket.splice(index, 1);
      } else {
        console.log(`Cant remove product (id: ${action.payload.id})`);
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

//selectors - for retrieving items in state to use in different components
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemWithID = (state: RootState, id: string) => {
  state.basket.items.filter((item: Product) => item._id === id);
};
export const selectBasketTotal = (state: RootState) => {
  state.basket.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
};

export default basketSlice.reducer;
