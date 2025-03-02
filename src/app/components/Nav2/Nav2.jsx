"use client";

import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../../../public/SVG/random.svg";
import banner from "../../../../public/banner.jpg";

const Nav2 = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <section className={styles.logo}>
        <div className={styles.menubar}>
          <Link href={"/"}>
            <i
              className="fa-solid fa-arrow-left-long"
              style={{ color: "white" }}
            ></i>
          </Link>
        </div>

        <Image className={styles.logoImage} objectFit="" src={logo} alt="" />
      </section>
      <section className={styles.menu}>
        <div className={styles.linkBoxeses}>
          <div className={styles.advertise}>
            <Image className={styles.adImg} objectFit="" src={banner} alt="" />
          </div>

          <div className={styles.menuLinkBox}>
            <Link className={styles.menuLink} href={""}>
              MAN
            </Link>
            <h1 className={styles.arrow}>{">"}</h1>
          </div>

          <div className={styles.menuLinkBox}>
            <Link className={styles.menuLink} href={""}>
              WOMAN
            </Link>
            <h1 className={styles.arrow}>{">"}</h1>
          </div>

          <div className={styles.menuLinkBox}>
            <Link className={styles.menuLink} href={""}>
              KIDS
            </Link>
            <h1 className={styles.arrow}>{">"}</h1>
          </div>

          <div className={styles.menuLinkBox}>
            <Link className={styles.menuLink} href={""}>
              BEAUTY
            </Link>
            <h1 className={styles.arrow}>{">"}</h1>
          </div>

          <div className={styles.menuLinkBox}>
            <Link className={styles.menuLink} href={""}>
              STUDIO
            </Link>
            <h1 className={styles.arrow}>{">"}</h1>
          </div>

          <div className={styles.othersLinkBox}>
            <Link className={styles.otherlink} href={""}>
              About
            </Link>
            <Link className={styles.otherlink} href={""}>
              About
            </Link>
            <Link className={styles.otherlink} href={""}>
              About
            </Link>
            <Link className={styles.otherlink} href={""}>
              About
            </Link>
            <Link className={styles.otherlink} href={""}>
              About
            </Link>
          </div>
        </div>
        <div className={styles.closeBox}></div>
      </section>

      <section className={styles.search}>
        <div className={styles.searchIcon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <input
          className={styles.inputField}
          type="text"
          placeholder="Search clothes..."
        />
      </section>

      <section className={styles.tools}>
        <i className="fa-regular fa-user"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-bag-shopping"></i>
      </section>
    </nav>
  );
};

export default Nav2;
