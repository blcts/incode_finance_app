import { combineReducers } from 'redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userReducer } from './fetch'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
}
const rootReducer = combineReducers({
  user: userReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
setupListeners(store.dispatch)

export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
