import React from 'react';
import TodoItem from '../TodoItem';

const TodoList: React.FC = () => {
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
        {[...Array(50)].map((el, i) => {
          return (
            <li key={i}>
              <TodoItem key={i} id={i} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
