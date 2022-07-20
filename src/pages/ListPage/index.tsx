import React, { useCallback, useEffect, useState } from 'react';
import { Loading, Title, TodoList, WeekWeather } from 'src/components';
import { getPastWeather, getWeather } from 'src/services/api';
import { getCurrentWeek } from 'src/services/utils';
import styles from './ListPage.module.css';

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
      <div className={styles.wrapper}>
        <Title title="THIS WEEK" description="신나는 일주일을 계획합시다" />
        <div className={styles.weekweather_wrapper}>
          {isLoading ? (
            <div className={styles.loading_wrapper}>
              <Loading />
            </div>
          ) : (
            <WeekWeather title={'이번주 날씨'} weekList={weekList} />
          )}
        </div>
      </div>

      <div className={styles.wrapper}>
        <h3>이번주 To Do</h3>
        <a href={'/add'} className={styles.add_button}>
          To Do 추가하기
        </a>
        <div className={styles.todolist_wrapper}>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
