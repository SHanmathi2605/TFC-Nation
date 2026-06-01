
export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  date: string; 
}

interface OrdersState {
  orders: OrderItem[];
}

const initialState: OrdersState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action: any): OrdersState => {
  switch (action.type) {
    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, ...action.payload] };
    default:
      return state;
  }
};