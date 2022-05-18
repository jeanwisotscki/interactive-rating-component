import React from "react";
import styles from "./Box.module.css";
import iconStar from "../images/icon-star.svg";

const Box = () => {
  return (
    <div className={styles.box}>
      <div className={styles.circle}>
        <img src={iconStar} alt="icon star" />
      </div>
      <div className={styles.textWrapper}>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve uor offering!
        </p>
      </div>
      <div>
        <ul className={styles.rating}>
          <li className={styles.circle}>1</li>
          <li className={styles.circle}>2</li>
          <li className={styles.circle}>3</li>
          <li className={styles.circle}>4</li>
          <li className={styles.circle}>5</li>
        </ul>
      </div>
      <button className={styles.btn}>SUBMIT</button>
    </div>
  );
};

export default Box;
