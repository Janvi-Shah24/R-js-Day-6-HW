// import { useState } from "react";
import "./Card.css";

const ProductCard = ({ products, setProducts, setQuantity, quantity, total, setTotal }) => {
  function Increase(id) {
    
    products.map((product) => {
      
      if (product.id === id) {
        
        product.quantity += 1;
        setTotal(total + product.price);
        setQuantity(quantity + 1);
      }
      return product;
    });
    
    setProducts(products);
  }

  
  function Decrease(id) {
    let tempProducts = [...products]; 

    tempProducts.map((product) => {
      
      if (product.id === id && product.quantity >= 1) {
        
        product.quantity -= 1;
        setTotal(total - product.price);
        setQuantity(quantity - 1);
      }
      return product;
    });

    
    setProducts(tempProducts);
  }

  function removeProduct(id) {
    let tempProducts = [...products]; 
    let arr = tempProducts.filter((product) => {
      if (product.id === id) {
        setTotal(total - product.quantity * product.price);
        setQuantity(quantity - product.quantity);
      }
      return product.id !== id;
    });
    setProducts(arr);
  }

  return (
    <div className = "mainDiv">
      {products.length <= 0 && <p>is currently empty</p>}
      {products.map((product) => {
        return (
          <div key={product.id} >
            <>
            <div>
                <img src={product.image} style={{ height: '80px' }}></img>
            </div>
            <h4>{product.name}</h4>
            <p>price: {product.price}</p>
            <button
              onClick={() => {
                removeProduct(product.id);
              }}
            >
              remove
            </button>
            </>
            <>
              <button
                onClick={() => {
                  Increase(product.id);
                }}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <button
                onClick={() => {
                  Decrease(product.id);
                }}
              >
                -
              </button>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;