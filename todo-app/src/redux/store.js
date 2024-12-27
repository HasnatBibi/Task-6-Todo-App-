import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage for web
import todoReducer from './reducers';

// Config for redux-persist
const persistConfig = {
  key: 'root', // Key for storing persist data
  storage,     // Storage type (localStorage in this case)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, todoReducer);

// Create the Redux store with the persisted reducer
const store = createStore(persistedReducer);

// Persistor for persisting and rehydrating the store
export const persistor = persistStore(store);

export default store;
