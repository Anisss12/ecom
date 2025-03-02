"use client";
import { useState } from "react";
import styles from "./tabbar.module.css";
import Link from "next/link";

const TabBar2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const blocks = [
    { href: "/cart", icon: "fa-solid fa-sort", label: "Sort" },
    { href: "/filter", icon: "fa-solid fa-filter", label: "Filter" },
  ];

  const toggleSortOptions = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.tabbar}>
      <div className={styles.bar}>
        {blocks.map((item, index) => (
          <div
            onClick={item.label === "Sort" ? toggleSortOptions : undefined}
            key={index}
            className={styles.block}
          >
            <Link className={styles.links} href={item.href}>
              {" "}
              <i className={item.icon}></i>
            </Link>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Sort Options */}
      <div
        className={`${styles.sortContainer} ${
          isExpanded ? styles.show : styles.hide
        }`}
      >
        <div className={styles.overlay} onClick={toggleSortOptions}></div>
        <div className={styles.sortBox}>
          <h1 className={styles.title}>SORT BY</h1>
          <div className={styles.options}>
            <i className="fa-solid fa-fire"></i>
            <h5>Popularity</h5>
          </div>
          <div className={styles.options}>
            <i className="fa-regular fa-star"></i>
            <h5>Latest</h5>
          </div>
          <div className={styles.options}>
            <i className="fa-solid fa-percent"></i>
            <h5>Discount</h5>
          </div>
          <div className={styles.options}>
            <i className="fa-solid fa-arrow-up"></i>
            <h5>Price: Low to High</h5>
          </div>
          <div className={styles.options}>
            <i className="fa-solid fa-arrow-down"></i>
            <h5>Price: High to Low</h5>
          </div>
          <div className={styles.options}>
            <i className="fa-solid fa-star-half-stroke"></i>
            <h5>Customer Rating</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBar2;
