import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const FoodCard = ({ food }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>₹ {food.price}</p>
      <button onClick={() => dispatch(addToCart(food))}>Add to Cart</button>
    </div>
  );
};

export default FoodCard;
