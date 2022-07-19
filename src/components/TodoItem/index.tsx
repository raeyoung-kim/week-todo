import React from 'react';

interface Props {
  data: Todo;
  onDelete: (data: Todo) => void;
  onChangeCheck: (data: Todo) => void;
}

const TodoItem: React.FC<Props> = ({ data, onDelete, onChangeCheck }) => {
  return (
    <article
      style={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
        }}
      >
        <input
          type={'checkbox'}
          checked={data.isCheck}
          onChange={() => {
            onChangeCheck(data);
          }}
        />
        <a href={`/modify/${data.id}`}>
          <p
            style={{
              color:
                data.date < new Date().toISOString() && !data.isCheck
                  ? 'red'
                  : 'black',
              textDecoration: data.isCheck ? 'line-through' : 'none',
            }}
          >
            {data.title}
          </p>
          <p style={{ fontSize: 12 }}>
            {data.date.slice(0, 10)} {data.date.slice(11, 17)}
          </p>
        </a>
      </div>
      <button onClick={() => onDelete(data)}>x</button>
    </article>
  );
};

export default TodoItem;
