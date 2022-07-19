import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from 'src/components';
import { getCurrentWeek, sortTodoList } from 'src/services/utils';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  type: 'add' | 'modify';
  data?: Todo;
}

const WriteTodo: React.FC<Props> = ({ data, type }) => {
  const navigate = useNavigate();
  const [currentWeek] = useState(getCurrentWeek());
  const [todoData, setTodoData] = useState<Todo>({
    id: uuidv4(),
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
      window.localStorage.setItem(
        'todo',
        JSON.stringify(sortTodoList(newTodoList))
      );
    } else {
      const result = [todoData];
      window.localStorage.setItem('todo', JSON.stringify(result));
    }
    navigate({
      pathname: '/',
    });
  };

  const handleModifyTodo = () => {
    if (!todoData.title.length) {
      return alert('제목을 입력해주세요 :)');
    }

    if (!todoData.date.length) {
      return alert('Due Date를 설정해주세요 :)');
    }

    const todoList = window.localStorage.getItem('todo');
    if (todoList) {
      const newTodoList = JSON.parse(todoList).map((el: Todo) => {
        if (el.id === todoData.id) {
          return todoData;
        } else {
          return el;
        }
      });

      window.localStorage.setItem('todo', JSON.stringify(newTodoList));
    }
    navigate({
      pathname: '/',
    });
  };

  useEffect(() => {
    if (data) {
      setTodoData(data);
    }
  }, [data]);

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
            value={todoData?.title}
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
          value={todoData?.description}
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
          type="datetime-local"
          style={{
            width: '100%',
            height: 30,
            padding: '0px 12px',
            marginTop: 8,
          }}
          min={currentWeek.dates[0].slice(0, 16)}
          value={data?.date}
          onChange={(e) => {
            setTodoData({
              ...todoData,
              date: e.target.value,
            });
          }}
        />
      </div>
      <button
        style={{ height: 40 }}
        onClick={type === 'add' ? handleTodoSave : handleModifyTodo}
      >
        저장 버튼
      </button>
    </div>
  );
};

export default WriteTodo;
