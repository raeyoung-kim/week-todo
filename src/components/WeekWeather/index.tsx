import React, { useEffect, useRef, useState } from 'react';
import { getCurrentWeek } from 'src/services/utils';
import WeatherItem from '../WeatherItem';

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
      {title ? <h3 style={{ marginBottom: 10 }}>{title}</h3> : null}
      <div
        ref={weatherRef}
        style={{
          display: 'flex',
          overflow: 'hidden',
          overflowX: 'auto',
          width: '100%',
        }}
      >
        {weekList.map((el) => {
          return <WeatherItem key={el.date} data={el} />;
        })}
      </div>
    </section>
  );
};

export default WeekWeather;
