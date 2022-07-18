import React, { useLayoutEffect, useState } from 'react';
import TodoItem from '../TodoItem';

const TodoList: React.FC = () => {
  const [list, setList] = useState<Todo[]>([]);
  useLayoutEffect(() => {
    const todoList = window.localStorage.getItem('todo');
    if (todoList) {
      setList(JSON.parse(todoList));
    }
  }, []);

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
        {list.map((el, i) => {
          return (
            <li key={el.id}>
              <TodoItem data={el} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
