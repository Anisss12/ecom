import React from "react";
import styles from "./AddtoCartCards.module.css";
import Image from "next/image";
import cartImg from "../../../../public/cart.jpg";

const AddtoCartCards = () => {
  return (
    <div className={styles.container}>
      <button className={styles.remove}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className={styles.imgBox}>
        <Image src={cartImg} alt="Product Image" width={80} height={80} />
      </div>
      <div className={styles.details}>
        <h1>Sonata</h1>
        <p className={styles.para}>Lorem ipsum dolar...</p>
        <p className={styles.soldBy}>Sold by: Bonadia</p>
        <div className={styles.quanSize}>
          <div className={styles.Size}>Size: 5</div>
          <div className={styles.quantity}>Quantity: 5</div>
        </div>
        <h1>Rs. 755</h1>
        <p className={styles.return}>14 days return available</p>
      </div>
    </div>
  );
};

export default AddtoCartCards;
