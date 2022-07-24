import React from "react";
import styles from "./dashboard.module.css";

const date = new Date();

const Balance = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.balanceTitle}>
            <p>Current Balance</p>
            <span>
              As of {date.getDate()}/{date.getMonth()}/{date.getFullYear()},{" "}
              {date.getHours()}:{date.getMinutes()}:{date.getMilliseconds()}
            </span>
          </div>
          <p>$11,300.00</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
