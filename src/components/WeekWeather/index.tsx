import React from 'react';
import WeatherItem from '../WeatherItem';

interface Props {
  title?: string;
}

const WeekWeather: React.FC<Props> = ({ title }) => {
  return (
    <section>
      {title ? <h3 style={{ marginBottom: 10 }}>{title}</h3> : null}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          overflowX: 'auto',
          width: '100%',
        }}
      >
        {[...Array(7)].map((el, i) => {
          return <WeatherItem key={i} />;
        })}
      </div>
    </section>
  );
};

export default WeekWeather;
