import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { ordersReducer } from './ordersReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);