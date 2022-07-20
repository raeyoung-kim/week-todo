import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import WriteTodo from './index';

describe('WriteTodo Container', () => {
  render(
    <BrowserRouter>
      <WriteTodo type="add" />
    </BrowserRouter>
  );

  it('제목, 내용, Due Date를 화면에 나타냅니다.', () => {
    const title = screen.getByText('제목');
    const description = screen.getByText('내용');
    const dueDate = screen.getByText('Due Date');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(dueDate).toBeInTheDocument();
  });
});
