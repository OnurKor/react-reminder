import React from "react";

import Test from './Test'
import { Title } from './Components';
import './tailwind.css'
import './style.scss'
import styles from './App.module.css'
import Tailwind from './Tailwind';

const Styles = () => {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p className="env">
        {process.env.NODE_ENV}
        <span>Test</span>
      </p>
      <img src="/logo192.png" alt="" />
      <Test />
      <Tailwind />
    </div>
  );
};

export default Styles;
