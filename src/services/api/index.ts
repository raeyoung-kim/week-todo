import axios from 'axios';
import { getCurrentWeek } from '../utils';

const KEY = '4513e6eb107b93b42e8106cc8bdea376';

const weatherAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0',
});

export default weatherAPI;

export const getWeather = async () => {
  try {
    const { data } = await weatherAPI.get(
      `/onecall?lat=37.58&lon=127&appid=${KEY}&lang=kr&units=metric`
    );

    return data;
  } catch (err) {
    console.error(err);
  }
};

const pastWeather = async (time: number) => {
  try {
    const { data } = await weatherAPI.get(
      `/onecall/timemachine?lat=37.58&lon=127&dt=${time}&appid=${KEY}&lang=kr&units=metric`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getPastWeather = async () => {
  try {
    const week = getCurrentWeek();
    const index = week.currenyDay;
    const dates = week.dates.slice(0, index);

    if (dates.length) {
      const result = await Promise.all(
        dates.map((el) => {
          return pastWeather(
            Math.floor(new Date(el.slice(0, 10)).getTime() / 1000)
          );
        })
      );
      return result;
    } else {
      return [];
    }
  } catch (err) {
    console.error(err);
  }
};
