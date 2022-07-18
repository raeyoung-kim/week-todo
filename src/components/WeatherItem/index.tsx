import React from 'react';
import { WEEK } from 'src/services/data';

interface Props {
  data: string;
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
        {data.slice(5, 10).split('-').join('/')}({WEEK[new Date(data).getDay()]}
        )
      </p>
      <span>(날씨 아이콘)</span>
      <p>섭씨</p>
    </article>
  );
};

export default WeatherItem;
