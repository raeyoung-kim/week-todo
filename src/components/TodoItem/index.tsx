import React from 'react';

interface Props {
  data: Todo;
}

const TodoItem: React.FC<Props> = ({ data }) => {
  return (
    <article style={{ display: 'flex' }}>
      <input type={'checkbox'} />
      <a href={`/modify/${data.id}`}>
        <p>{data.title}</p>
      </a>
      <button>x</button>
    </article>
  );
};

export default TodoItem;
