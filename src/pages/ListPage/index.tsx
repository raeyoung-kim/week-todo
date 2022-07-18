import React from 'react';
import { Title, TodoList, WeekWeather } from 'src/components';

const ListPage: React.FC = () => {
  return (
    <div className="container">
      <div style={{ height: '50%' }}>
        <Title title="THIS WEEK" description="신나는 일주일을 계획합시다" />
        <div style={{ padding: '16px 0px' }}>
          <WeekWeather title={'이번주 날씨'} />
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
