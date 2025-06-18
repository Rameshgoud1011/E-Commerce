import React from 'react';
import './Products.css';

const products = [
  { name: "Smartwatch", price: "$99", image: "/images/product1.jpg" },
  { name: "Headphones", price: "$59", image: "/images/product2.jpg" },
  { name: "Sneakers", price: "$129", image: "/images/product3.jpg" },
];

function ProductSection() {
  return (
    <section className="products" id="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product, i) => (
          <div className="product-card" key={i}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
