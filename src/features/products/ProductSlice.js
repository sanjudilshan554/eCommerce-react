import { createSlice } from "@reduxjs/toolkit";
import Products from "../../assets/productsContent";

const initialState = {
  items: Products,
  filteredItems: Products,
  searchTerm: "",
};

const filterProducts = (state) => {
  return state.items.filter((product) =>
    product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  );
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },
  },
});

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
