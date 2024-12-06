import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tiffany</h1>
        <p className={styles.description}>
        I am a front-end web developer with a passion for creating functional, aesthetic websites.
        </p>
        <a href="https://drive.google.com/file/d/1x12Gw_mv5iFN16jINg43STKoyqkcIVA1/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/profileimage.jpg")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
