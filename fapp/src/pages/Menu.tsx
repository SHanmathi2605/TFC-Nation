import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { CartItem } from '../redux/cartReducer';
import '../styles/styles.css';

const Menu: React.FC = () => {
  const [meals, setMeals] = useState<CartItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const itemsPerPage = 8; // 2 rows × 4 columns

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then(res => {
        const fetchedMeals: CartItem[] = res.data.meals.map((meal: any) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          price: Math.floor(Math.random() * 200) + 100,
          quantity: 1,
        }));
        setMeals(fetchedMeals);
      })
      .catch(err => console.error(err));
  }, []);

  const totalPages = Math.ceil(meals.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleMeals = meals.slice(startIndex, startIndex + itemsPerPage);

  // ✅ Add filler cards for grid alignment
  const fillers = Array(itemsPerPage - visibleMeals.length).fill(null);

  const handleAdd = (meal: CartItem) => {
    dispatch(addToCart(meal));
    alert(`${meal.name} added to cart`);
  };

  return (
    <div className="menu-container">
      <div className="meals-grid">
        {visibleMeals.map(meal => (
          <div key={meal.id} className="meal-card">
            <img src={meal.image} alt={meal.name} />
            <h3>{meal.name}</h3>
            <p>₹{meal.price}</p>
            <button onClick={() => handleAdd(meal)}>Add to Cart</button>
          </div>
        ))}

        {/* 👇 Invisible filler cards */}
        {fillers.map((_, index) => (
          <div key={`filler-${index}`} className="meal-card filler"></div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(p => p - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Menu;