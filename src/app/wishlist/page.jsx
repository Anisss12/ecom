"use client";
import React, { useState } from "react";
import styles from "./wishlist.module.css";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Wishlist Item 1",
      price: 300,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Wishlist Item 2",
      price: 450,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.wishlistContainer}>
      <h2 className={styles.wishlistTitle}>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className={styles.emptyWishlist}>Your wishlist is empty</p>
      ) : (
        <ul className={styles.wishlistList}>
          {wishlist.map((item) => (
            <li key={item.id} className={styles.wishlistItem}>
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
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
