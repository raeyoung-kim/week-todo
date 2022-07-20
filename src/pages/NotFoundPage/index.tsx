import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>{`이런 :( 사용되지 않는 페이지입니다.`}</p>
        <a href="/" className={styles.link}>
          메인으로 돌아가기
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
