import React from 'react';
import { WEEK } from 'src/services/data';

interface Props {
  data: WeatherData;
}

const WeatherItem: React.FC<Props> = ({ data }) => {
  return (
    <article
      style={{
        minWidth: 100,
        maxWidth: 100,
        minHeight: 150,
        maxHeight: 150,
        height: '100%',
        backgroundColor: '#ddd',
        marginRight: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>
        {data.date.slice(5, 10).split('-').join('/')}(
        {WEEK[new Date(data.date).getDay()]})
      </p>
      <span>
        <img
          width={50}
          height={50}
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        />
      </span>
      <p>
        {data.day ? Math.round(data.day) : null}
        {data.temp ? Math.round(data.temp) : null}
      </p>
    </article>
  );
};

export default WeatherItem;
