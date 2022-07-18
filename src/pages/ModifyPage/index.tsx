import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { WriteTodo } from 'src/containers';

const ModifyPage: React.FC = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState<Todo>({
    id: pathname.split('/')[2],
    title: '',
    description: '',
    date: '',
    isCheck: false,
  });

  useEffect(() => {
    const list = window.localStorage.getItem('todo');
    if (list) {
      const find = JSON.parse(list).find((el: Todo) => el.id === data.id);
      setData(find);
    }
  }, []);

  return (
    <div className="container">
      <WriteTodo type="modify" data={data} />
    </div>
  );
};

export default ModifyPage;
