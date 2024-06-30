import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  products: [],
  product: null,
  pagination: {},
  favouritesToggled: true,
  // просмотренно
  reviewed: false,
  // избранное
  favorites: JSON.parse(localStorage.getItem('favorites')) ?? [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.products = payload;
    },
    setProduct: (state, { payload }) => {
      state.product = payload;
      state.loading = false;
      state.error = null;
      state.reviewed = false;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    setPagination: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.pagination = payload;
    },
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
    setFavoritesToggle: (state, { payload }) => {
      state.favoritesToggled = payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setProducts,
  setProduct,
  setPagination,
  setFavoritesToggle,
  setFavorites,
} = productsSlice.actions;

export default productsSlice.reducer;

export const productSelector = (state) => state.products;
