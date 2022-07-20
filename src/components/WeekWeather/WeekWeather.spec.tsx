import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import WeekWeather from './index';

const weekList = [
  {
    date: '2022-07-20T05:13:54.360Z',
    dt: 23412334234,
    icon: '10d',
    main: 'Rain',
    day: 300,
    temp: 300,
  },
  {
    date: '2022-07-21T05:13:54.360Z',
    dt: 23412334234,
    icon: '10d',
    main: 'Cloud',
    day: 300,
    temp: 300,
  },
];

describe('WeekWeather Component', () => {
  render(
    <BrowserRouter>
      <WeekWeather title={'To Do'} weekList={weekList} />
    </BrowserRouter>
  );

  it('To Do 타이틀을 화면에 나타냅니다.', () => {
    waitFor(() => {
      const title = screen.getByText('To do');
      expect(title).toBeInTheDocument();
    });
  });
});
