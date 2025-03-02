"use client";

import { useState } from "react";
import styles from "./tabbar.module.css"; // Ensure CSS module is imported
import Link from "next/link";

const TabBar = ({ category }) => {
  const [hoverIndex, setHoverIndex] = useState(category || null);

  const blocks = [
    { href: "/", icon: "fa-solid fa-house", lebel: "Home" },
    { href: "/wishlist", icon: "fa-regular fa-heart", lebel: "Wish List" },
    { href: "/cart", icon: "fa-solid fa-cart-plus", lebel: "Cart" },
    { href: "/profile", icon: "fa-regular fa-user", lebel: "Profile" },
  ];

  return (
    <div className={styles.tabbar}>
      {/* Moving Indicator */}
      <div
        className={styles.indicator}
        style={{
          left: hoverIndex !== null ? `${hoverIndex * 25}%` : "0%",
          transition: "left 0.3s ease-in-out",
        }}
      ></div>

      {blocks.map((item, index) => (
        <Link
          key={index}
          className={styles.block}
          href={item.href}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <i className={item.icon}></i>
          <p className={styles.lebel}>{item.lebel}</p>
        </Link>
      ))}
    </div>
  );
};

export default TabBar;
