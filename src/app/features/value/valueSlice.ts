import { createSlice } from "@reduxjs/toolkit";
import { IItems, prices } from "./type";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    items:<IItems> {
      ped: {
        "Standart Ped": { count: 0, totalPrice: 0 },
        "Süper Ped": { count: 0, totalPrice: 0 },
        "Süper+ Ped": { count: 0, totalPrice: 0 },
      },
      "günlük ped": {
        "Günlük Ped": { count: 0, totalPrice: 0 },
        "Süper Günlük Ped": { count: 0, totalPrice: 0 },
      },
      tampon: {
        "Mini Tampon": { count: 0, totalPrice: 0 },
        "Standart Tampon": { count: 0, totalPrice: 0 },
      },
    },
  },
  reducers: {
    setItemCount: (state, action) => {
      const { tab, ped, count } = action.payload;
      state.items[tab][ped] = { count, totalPrice: count * prices[ped] };
    },
    deleteItem: (state, action) => {
      const tabName = action.payload;
      const currentTab = state.items[tabName];
      Object.keys(currentTab).forEach((key) => {
        currentTab[key] = { count: 0, totalPrice: 0 };
      });
    },
  },
});

export const { setItemCount, deleteItem } = counterSlice.actions;

export default counterSlice.reducer;
