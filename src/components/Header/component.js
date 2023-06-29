import React from "react";
import styles from "./styles.module.css";
export default function Header() {
  return (
    <>
      <header>
        <div className={styles.header}>
            <div className={styles.logo}>Apprentice</div>
          <div style={{ display: "flex" }}>
            <select
              className={styles.selectLang}
            >
              <option>KZ</option>
              <option>EN</option>
              <option>RU</option>
            </select>
            <div
              style={{ position: "relative" }}
            >
            </div>
          </div>
        </div>
        <hr></hr>
      </header>
    </>
  );
};