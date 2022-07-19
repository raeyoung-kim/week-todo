import React, { useEffect, useState } from 'react';
import TodoItem from '../TodoItem';

const TodoList: React.FC = () => {
  const [list, setList] = useState<Todo[]>([]);

  useEffect(() => {
    const todoList = window.localStorage.getItem('todo');

    if (todoList) {
      setList(JSON.parse(todoList));
    }
  }, []);

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

  return (
    <section
      style={{
        border: '1px solid #ddd',
        height: '100%',
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    >
      <ul>
        {list.map((el) => {
          return (
            <li key={el.id} style={{ padding: '8px 12px' }}>
              <TodoItem
                data={el}
                onDelete={handleTodoDelete}
                onChangeCheck={handleTodoCheck}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
