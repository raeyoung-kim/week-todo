import classNames from 'classnames';
import React from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { WEEK } from 'src/services/data';
import { getCurrentWeek } from 'src/services/utils';
import styles from './WeatherItem.module.css';

interface Props {
  data: WeatherData;
}

const WeatherItem: React.FC<Props> = ({ data }) => {
  const { today } = getCurrentWeek();
  const isToday = today.slice(0, 10) === data.date.slice(0, 10);

  return (
    <article
      className={classNames([styles.container], {
        [styles.today]: isToday,
      })}
    >
      <div>
        {isToday && <p className={styles.today_text}>오늘</p>}
        {data.date.slice(5, 10).split('-').join('/')}(
        {WEEK[new Date(data.date).getDay()]})
      </div>
      <span>
        <img
          alt={data.main}
          width={50}
          height={50}
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        />
      </span>
      <p>
        {data.day ? Math.round(data.day) : null}
        {data.temp ? Math.round(data.temp) : null}
        <TbTemperatureCelsius />
      </p>
    </article>
  );
};

export default WeatherItem;
