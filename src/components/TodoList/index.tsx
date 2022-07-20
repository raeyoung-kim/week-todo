import React, { useEffect, useState } from 'react';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
  const [list, setList] = useState<Todo[]>([]);

  const handleTodoCheck = (data: Todo) => {
    const todoList = window.localStorage.getItem('todo');
    if (todoList) {
      const newTodoList = JSON.parse(todoList).map((el: Todo) => {
        if (el.id !== data.id) {
          return el;
        } else {
          return { ...el, isCheck: !el.isCheck };
        }
      });
      window.localStorage.setItem('todo', JSON.stringify(newTodoList));
      setList(newTodoList);
    }
  };

  const handleTodoDelete = (data: Todo) => {
    const todoList = window.localStorage.getItem('todo');
    if (todoList) {
      const newTodoList = JSON.parse(todoList).filter(
        (el: Todo) => el.id !== data.id
      );
      window.localStorage.setItem('todo', JSON.stringify(newTodoList));
      setList(newTodoList);
    }
  };

  useEffect(() => {
    const todoList = window.localStorage.getItem('todo');

    if (todoList) {
      setList(JSON.parse(todoList));
    }
  }, []);

  return (
    <section data-testid="todo-list" className={styles.container}>
      {list.length ? (
        <ul>
          {list.map((el) => {
            return (
              <li key={el.id}>
                <TodoItem
                  data={el}
                  onDelete={handleTodoDelete}
                  onChangeCheck={handleTodoCheck}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles.emptywrapper}>
          <p>{`투두 항목을 작성해주세요 :)`}</p>
        </div>
      )}
    </section>
  );
};

export default TodoList;
