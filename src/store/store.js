import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Gerenciamento de autenticação
import productsReducer from './productsSlice'; // Gerenciamento dos produtos

export const store = configureStore({
  reducer: {
    auth: authReducer, // Gerencia o estado de autenticação (auth)
    products: productsReducer, // Gerencia o estado dos produtos
  },
});
