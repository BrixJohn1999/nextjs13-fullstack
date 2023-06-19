import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
function Blog() {
  return (
    <div className={styles.maincontainer}>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/2372982/pexels-photo-2372982.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={400}
            height={250}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel
            tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/2372982/pexels-photo-2372982.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={400}
            height={250}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel
            tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
