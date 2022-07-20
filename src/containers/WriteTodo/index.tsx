import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from 'src/components';
import { getCurrentWeek, sortTodoList } from 'src/services/utils';
import { v4 as uuidv4 } from 'uuid';
import styles from './WriteTodo.module.css';

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
    <div className={styles.container}>
      <div>
        <Title title="To-Do" />
        <div className={styles.title_wrapper}>
          <h3>제목</h3>
          <input
            type={'text'}
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
      <div className={styles.description_wrapper}>
        <h3>내용</h3>
        <textarea
          value={todoData?.description}
          onChange={(e) =>
            setTodoData({
              ...todoData,
              description: e.target.value,
            })
          }
        />
      </div>
      <div className={styles.duedate_wrapper}>
        <h3>Due Date</h3>
        <input
          type="date"
          min={currentWeek.dates[0].slice(0, 10)}
          value={data?.date}
          onChange={(e) => {
            setTodoData({
              ...todoData,
              date: e.target.value,
            });
          }}
        />
      </div>
      <button onClick={type === 'add' ? handleTodoSave : handleModifyTodo}>
        저장 버튼
      </button>
    </div>
  );
};

export default WriteTodo;
