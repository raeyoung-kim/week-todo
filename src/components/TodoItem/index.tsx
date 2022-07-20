import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdHighlightOff,
} from 'react-icons/md';
import classNames from 'classnames';
import styles from './TodoItem.module.css';
interface Props {
  data: Todo;
  onDelete: (data: Todo) => void;
  onChangeCheck: (data: Todo) => void;
}

const TodoItem: React.FC<Props> = ({ data, onDelete, onChangeCheck }) => {
  return (
    <article className={styles.container}>
      <div className={styles.inner}>
        {data.isCheck ? (
          <MdCheckBox
            data-testid="checked"
            className={styles.icon}
            onClick={() => onChangeCheck(data)}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            className={styles.icon}
            onClick={() => onChangeCheck(data)}
          />
        )}

        <a href={`/modify/${data.id}`}>
          <p
            className={classNames({
              [styles.checked]: data.isCheck,
              [styles.unchecked]: !data.isCheck,
              [styles.todo_color_red]:
                data.date < new Date().toISOString() && !data.isCheck,
            })}
          >
            {data.title}
          </p>
          <p className={styles.date}>
            {data.date.slice(0, 10)} {data.date.slice(11, 17)}
          </p>
        </a>
      </div>
      <button className={styles.button} onClick={() => onDelete(data)}>
        <MdHighlightOff className={styles.close_icon} />
      </button>
    </article>
  );
};

export default TodoItem;
