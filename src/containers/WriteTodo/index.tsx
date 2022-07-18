import React from 'react';
import { Title } from 'src/components';

const WriteTodo: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <div>
        <Title title="To-Do" />
        <div style={{ padding: '16px 0px', marginTop: 10 }}>
          <h3>제목</h3>
          <input
            type={'text'}
            style={{
              width: '100%',
              height: 30,
              padding: '0px 12px',
              marginTop: 8,
            }}
          />
        </div>
      </div>
      <div>
        <h3>내용</h3>
        <textarea
          style={{ height: 150, width: '100%', marginTop: 8, resize: 'none' }}
        ></textarea>
      </div>
      <div>
        <h3>Due Date</h3>
        <input
          type="date"
          style={{
            width: '100%',
            height: 30,
            padding: '0px 12px',
            marginTop: 8,
          }}
        />
      </div>
      <button style={{ height: 40 }}>저장 버튼</button>
    </div>
  );
};

export default WriteTodo;
