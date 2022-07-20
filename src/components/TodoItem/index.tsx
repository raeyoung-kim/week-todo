import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdHighlightOff,
} from 'react-icons/md';
import classNames from 'classnames';
import styles from './TodoItem.module.css';
import { getCurrentWeek } from 'src/services/utils';
interface Props {
  data: Todo;
  onDelete: (data: Todo) => void;
  onChangeCheck: (data: Todo) => void;
}

const TodoItem: React.FC<Props> = ({ data, onDelete, onChangeCheck }) => {
  const { today } = getCurrentWeek();

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
                data.date <= today.slice(0, 10) && !data.isCheck,
            })}
          >
            {data.title}
          </p>
          <p
            className={classNames(styles.date, {
              [styles.todo_color_red]:
                data.date <= today.slice(0, 10) && !data.isCheck,
            })}
          >
            due date: {data.date.slice(0, 10)}
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
