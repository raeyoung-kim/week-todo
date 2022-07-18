import React from 'react';

interface Props {
  id: string | number;
}

const TodoItem: React.FC<Props> = ({ id }) => {
  return (
    <article style={{ display: 'flex' }}>
      <input type={'checkbox'} />
      <a href={`/modify/${id}`}>
        <p>test</p>
      </a>
      <button>x</button>
    </article>
  );
};

export default TodoItem;
