import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import "./App.css";
import { products } from "./data";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            hoverImage={product.hoverImage}
            name={product.name}
            category={product.category}
            price={product.price}
            description={product.description}
            colors={product.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
