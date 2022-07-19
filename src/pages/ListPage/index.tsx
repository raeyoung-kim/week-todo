import React, { useCallback, useEffect, useState } from 'react';
import { Title, TodoList, WeekWeather } from 'src/components';
import { getPastWeather, getWeather } from 'src/services/api';
import { getCurrentWeek } from 'src/services/utils';

const ListPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weekList, setWeekList] = useState<WeatherData[]>([]);

  const load = useCallback(async () => {
    try {
      setIsLoading(true);
      const past = await getPastWeather();
      const current = await getCurrentWeek();

      const week = current.dates;
      const index = current.currenyDay;

      const data = await getWeather();

      const pastList = week.slice(0, index);

      const pastResult =
        past?.map((el, i) => {
          return {
            ...el.data[0],
            ...el.data[0].weather[0],
            date: pastList[i],
          };
        }) || [];

      const currentList = week.slice(index, week.length);

      const currentResult = currentList.map((el: string, i) => {
        return {
          date: el,
          dt: data.daily[i].dt,
          ...data.daily[i].temp,
          ...data.daily[i].weather[0],
        };
      });

      setWeekList([...pastResult, ...currentResult]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="container">
      <div style={{ height: '50%' }}>
        <Title title="THIS WEEK" description="신나는 일주일을 계획합시다" />
        <div style={{ padding: '16px 0px' }}>
          <WeekWeather title={'이번주 날씨'} weekList={weekList} />
        </div>
      </div>

      <div style={{ height: '50%' }}>
        <h3>이번주 To Do</h3>
        <a
          href={'/add'}
          style={{
            textDecoration: 'none',
            display: 'block',
            textAlign: 'center',
            backgroundColor: '#ddd',
            padding: '10px 0px',
            marginTop: 12,
          }}
        >
          추가 버튼
        </a>
        <div style={{ marginTop: 16, height: '55%' }}>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
