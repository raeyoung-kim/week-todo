import React from 'react';
import { WriteTodo } from 'src/containers';

const AddPage: React.FC = () => {
  return (
    <div className="container">
      <WriteTodo type="add" />
    </div>
  );
};

export default AddPage;
