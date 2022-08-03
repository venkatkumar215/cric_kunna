import { combineReducers, configureStore,ThunkAction,Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// reducer
const reducers =combineReducers({});

const persistConfig = {
    key: 'cric_Kunna',
    version: 1,
    storage,
    blacklist: [],
    whitelist: []
};
// Store
const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export const persistor = persistStore(store);

export default store;


//Types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;



export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector