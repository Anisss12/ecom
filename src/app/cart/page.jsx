"use client";
import React, { useState } from "react";
import styles from "./cart.module.css";
import Nav2 from "../components/Nav2/Nav2";
import Tabbar from "../components/Tabbar/Tabbar";
import AddtoCartCards from "../components/AddtoCartCards/AddtoCartCards";

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
    {
      id: 4,
      name: "Product 3",
      price: 350,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Product 3",
      price: 350,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
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
            <AddtoCartCards key={item.id}></AddtoCartCards>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className={styles.tab}>
          <p>3 item selected</p>
          <button className={styles.checkoutButton}>
            {" "}
            P L A C E <span style={{ color: "transparent" }}>" </span>O R D E R
          </button>
        </div>
      )}

      <Tabbar category={2}></Tabbar>
    </div>
  );
};

export default CartPage;
