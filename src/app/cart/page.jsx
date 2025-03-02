"use client";
import React, { useState } from "react";
import styles from "./cart.module.css";
import Nav2 from "../components/Nav2/Nav2";
import Tabbar from "../components/Tabbar/Tabbar";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 250,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Product 3",
      price: 350,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.cartContainer}>
      <Nav2></Nav2>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemPrice}>${item.price}</p>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      )}
      <Tabbar></Tabbar>
    </div>
  );
};

export default CartPage;
