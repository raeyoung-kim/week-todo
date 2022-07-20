import React, { useEffect, useRef, useState } from 'react';
import { getCurrentWeek } from 'src/services/utils';
import WeatherItem from '../WeatherItem';
import styles from './WeekWeather.module.css';

interface Props {
  title?: string;
  weekList: WeatherData[];
}

const WeekWeather: React.FC<Props> = ({ title, weekList }) => {
  const weatherRef = useRef<HTMLDivElement>(null);
  const [currentWeek] = useState(getCurrentWeek());

  useEffect(() => {
    if (weatherRef) {
      weatherRef.current?.scrollTo(currentWeek.currenyDay * 112, 0);
    }
  }, [weatherRef, weekList]);

  return (
    <section>
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      <div ref={weatherRef} className={styles.wrapper}>
        {weekList.map((el) => {
          return <WeatherItem key={el.date} data={el} />;
        })}
      </div>
    </section>
  );
};

export default WeekWeather;
