import React from 'react';
import styles from './CSSModule.module.css';

const CssModule = () => {
  return (
    <div className={styles.wrapper}>
      Hello, I'm <span className="something">CSS Module!</span>
    </div>
  );
};

export default CssModule;
