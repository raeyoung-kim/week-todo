import React, { useEffect, useRef, useState } from 'react';
import { getCurrentWeek } from 'src/services/utils';
import WeatherItem from '../WeatherItem';

interface Props {
  title?: string;
}

const WeekWeather: React.FC<Props> = ({ title }) => {
  const weatherRef = useRef<HTMLDivElement>(null);
  const [currentWeek] = useState(getCurrentWeek());

  useEffect(() => {
    if (weatherRef) {
      weatherRef.current?.scrollTo(currentWeek.currenyDay * 112, 0);
    }
  }, [weatherRef]);

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
        {currentWeek.dates.map((el) => {
          return <WeatherItem key={el} data={el} />;
        })}
      </div>
    </section>
  );
};

export default WeekWeather;
