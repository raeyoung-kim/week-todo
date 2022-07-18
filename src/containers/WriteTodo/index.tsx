import React, { useLayoutEffect, useState } from 'react';
import { Title } from 'src/components';

interface Props {
  data?: Todo;
}

const WriteTodo: React.FC<Props> = ({ data }) => {
  const [todoData, setTodoData] = useState({
    title: '',
    description: '',
    date: '',
    isCheck: false,
  });

  const handleTodoSave = () => {
    if (!todoData.title.length) {
      return alert('제목을 입력해주세요 :)');
    }

    if (!todoData.date.length) {
      return alert('Due Date를 설정해주세요 :)');
    }

    const todoList = window.localStorage.getItem('todo');
    if (todoList) {
      const newTodoList = JSON.parse(todoList);
      newTodoList.push(todoData);
      window.localStorage.setItem('todo', JSON.stringify(newTodoList));
    } else {
      const result = [todoData];
      window.localStorage.setItem('todo', JSON.stringify(result));
    }
  };

  useLayoutEffect(() => {
    if (data) {
      setTodoData(data);
    }
  }, []);

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
            onChange={(e) =>
              setTodoData({
                ...todoData,
                title: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div>
        <h3>내용</h3>
        <textarea
          style={{ height: 150, width: '100%', marginTop: 8, resize: 'none' }}
          onChange={(e) =>
            setTodoData({
              ...todoData,
              description: e.target.value,
            })
          }
        />
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
          onChange={(e) =>
            setTodoData({
              ...todoData,
              date: e.target.value,
            })
          }
        />
      </div>
      <button style={{ height: 40 }} onClick={handleTodoSave}>
        저장 버튼
      </button>
    </div>
  );
};

export default WriteTodo;
