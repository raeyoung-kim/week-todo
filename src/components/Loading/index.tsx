import React from 'react';
import styles from './spinner.module.css';

const Loading: React.FC = () => {
  return (
    <div data-testid="loading">
      <div className={styles.loading_spinner}></div>
    </div>
  );
};

export default Loading;
