import React from "react";
import Footer from "../components/Footer";
import banner from "../images/bannner.jpg";

const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="home-bg"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="home-content">
          <h1>Welcome to TFC NATION </h1>
          <p>Order your favorite chicken meals now!</p>
          <button className="order-btn">Order Now</button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">🍗 Fresh & Hot Food</div>
          <div className="feature-card">🚚 Fast Delivery</div>
          <div className="feature-card">💰 Affordable Price</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;