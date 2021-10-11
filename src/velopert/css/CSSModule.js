import React from 'react';
import classNames from 'classnames/bind';
import styles from '../scss/CSSModule.module.scss';

// 미리 styles에서 클래스를 받아 오도록 설정
const cx = classNames.bind(styles);

const CssModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      Hello, I'm <span className="something">CSS Module!</span>
    </div>
  );
};

export default CssModule;
