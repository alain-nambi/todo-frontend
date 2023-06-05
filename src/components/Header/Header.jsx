import React from 'react';
import { HandleTask } from '../Tasks/handleTask';
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Todo App</h1>
      </div>

      <HandleTask />
    </header>
  );
}