import { CartItem } from './cartReducer';
import { OrderItem } from './ordersReducer';

export const addToCart = (item: CartItem) => ({
  type: 'ADD_TO_CART',
  payload: item
});

export const removeFromCart = (id: string) => ({
  type: 'REMOVE_FROM_CART',
  payload: id
});

export const clearCart = () => ({
  type: 'CLEAR_CART'
});

export const addOrder = (order: OrderItem[]) => ({
  type: 'ADD_ORDER',
  payload: order,
});