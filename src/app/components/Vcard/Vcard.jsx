import Image from "next/image";
import React from "react";
import cloth from "../../../../public/cloth.jpg";
import styles from "./vcard.module.css";
import Link from "next/link";

export default function Vcard({ link }) {
  return (
    <div className={styles.vcard}>
      <Link href={"/category"} className={styles.imgBox}>
        <Image
          className={styles.vcardImage}
          src={link ? link : null}
          width={500}
          height={500}
          alt="hi"
        />
      </Link>
      <div className={styles.content}>
        <h2 className={styles.title}>This is title</h2>
        <h3 className={styles.description}>This is desription</h3>
      </div>
    </div>
  );
}
