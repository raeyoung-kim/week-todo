import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TodoList from './index';

describe('TodoList Component', () => {
  render(
    <BrowserRouter>
      <TodoList />
    </BrowserRouter>
  );

  it('render TodoList', () => {
    const todoList = screen.getByTestId('todo-list');
    expect(todoList).toBeVisible();
  });
});
