import React from "react";
import styles from "./page.module.css";
import Button from "../../../components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTittle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel
            tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
          <Button text={"See more"} url={"/#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/3063362/pexels-photo-3063362.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width=""
            height=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel
            tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
          <Button text={"See more"} url={"/#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/2372982/pexels-photo-2372982.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width=""
            height=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
