import React from 'react';
import styles from './Title.module.css';

interface Props {
  title: string;
  description?: string;
}

const Title: React.FC<Props> = ({ title, description }) => {
  return (
    <section className={styles.wrapper}>
      <h1>{title}</h1>
      {description ? <p className={styles.description}>{description}</p> : null}
    </section>
  );
};

export default Title;
