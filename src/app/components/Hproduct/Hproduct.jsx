import React from "react";
import styles from "./hproduct.module.css";
import Image from "next/image";
import kdimg from "../../../../public/kids.jpg";
import Link from "next/link";

const ProductCard = ({ product, link }) => {
  return (
    <Link href={"/buy"} className={styles.card}>
      {/* Left Side - Image */}
      <div className={styles.imageContainer}>
        {"29" && <span className={styles.badge}>20% OFF</span>}
        <Image
          width={500}
          height={500}
          src={link}
          alt={"product.name"}
          className={styles.image}
        />
      </div>

      {/* Right Side - Details */}
      <div className={styles.content}>
        <h2 className={styles.title}>Product name</h2>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
          deleniti.
        </p>

        {/* Rating */}
        <div className={styles.rating}>
          <h4 style={{ color: "blue", fontWeight: "250" }}> 4.6</h4>
          {"⭐".repeat(4)}
          {"☆".repeat(1)}
          <h4 style={{ color: "black", fontWeight: "250" }}> (200)</h4>
        </div>

        {/* Price */}
        <div className={styles.priceContainer}>
          <span className={styles.actualPrice}>Rs.5000</span>
          <span className={styles.crossedPrice}>Rs.9000</span>
        </div>

        {/* Stock Status */}
        <p className={styles.stockStatus}>
          {true ? "In Stock " : "Out of Stock ❌"}
        </p>

        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.addToCart}`}
            disabled={true}
          >
            {true ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
