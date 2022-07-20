import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import WeatherItem from './index';

const weatherData = {
  date: '2022-07-20T05:13:54.360Z',
  dt: 23412334234,
  icon: '10d',
  main: 'Rain',
  day: 300,
  temp: 300,
};

describe('WeatherItem Component', () => {
  render(
    <BrowserRouter>
      <WeatherItem data={weatherData} />
    </BrowserRouter>
  );

  it('weatherData.date의 월/일을 화면에 나타냅니다.', () => {
    const date = weatherData.date.slice(5, 10).split('-').join('/');
    waitFor(() => {
      const dateText = screen.getByText(date);
      expect(dateText).toBeInTheDocument();
    });
  });

  it('Rain 이미지를 나타냅니다.', () => {
    waitFor(() => {
      const imgAlt = screen.getAllByText('Rain');
      expect(imgAlt).toBeVisible();
    });
  });
});
