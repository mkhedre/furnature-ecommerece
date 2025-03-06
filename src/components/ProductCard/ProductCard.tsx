import { useState } from "react";
import { FaHeart, FaSearch, FaExpandArrowsAlt } from "react-icons/fa";
import "./ProductCard.css";

interface ProductCardProps {
  image: string;
  hoverImage: string;
  name: string;
  category: string;
  price: number;
  description: string;
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  hoverImage,
  name,
  category,
  price,
  description,
  colors,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`product-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img
          src={image}
          alt={name}
          className={`product-image ${isHovered ? "fade-out" : "fade-in"}`}
        />
        <img
          src={hoverImage}
          alt={name}
          className={`product-image ${isHovered ? "fade-in" : "fade-out"}`}
        />
      </div>

      <div className={`color-options ${isHovered ? "visible" : ""}`}>
        {colors.map((color, index) => (
          <span
            key={index}
            className="color-circle"
            style={{ backgroundColor: color }}
          ></span>
        ))}
        <button className="expand-button">
          <FaExpandArrowsAlt />
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className={`product-description ${isHovered ? "visible" : ""}`}>
          {description}
        </p>
      </div>

      <div className={`action-buttons ${isHovered ? "visible" : ""}`}>
        <button className="icon-button">
          <FaHeart />
        </button>
        <button className="select-options">SELECT OPTIONS</button>
        <button className="icon-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
