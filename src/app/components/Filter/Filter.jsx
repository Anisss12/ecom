"use client";
import React, { useEffect } from "react";
import styles from "./filter.module.css";

const Filter = ({ isExpanded, setIsExpanded }) => {
  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add("no-scroll"); // Stop scrolling
    } else {
      document.body.classList.remove("no-scroll"); // Enable scrolling
    }
  }, [isExpanded]);

  return (
    <div
      className={`${styles.filter} ${isExpanded ? styles.show : styles.hide}`}
    >
      <div className={styles.heading}>
        <h1>Filter</h1>
      </div>
      <div className={styles.middle}>
        <div className={styles.topBar}>
          <div className={styles.size}>
            <h1>Size</h1>
          </div>
          <div className={styles.search}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            {Array(30)
              .fill("Price")
              .map((item, index) => (
                <div key={index} className={styles.h1}>
                  {item}
                </div>
              ))}
          </div>
          <div className={styles.right}>
            {Array(25)
              .fill("3xs")
              .map((item, index) => (
                <div key={index} className={styles.option}>
                  <i className="fa-solid fa-check"></i>
                  <h1>{item}</h1>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.tab}>
        <button className={styles.buttons} onClick={() => setIsExpanded(false)}>
          Close
        </button>
        <button className={styles.buttons}>Apply</button>
      </div>
    </div>
  );
};

export default Filter;
