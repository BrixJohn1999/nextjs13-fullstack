import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>@2023 Brix System. All rights Reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Lama Dev fb"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="Lama Dev ig"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="Lama Dev twitter"
          width={15}
          height={15}
          className={styles.icon}
        />

        <Image
          src="/4.png"
          alt="Lama Dev youtube"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
