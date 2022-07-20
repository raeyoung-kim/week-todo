import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TodoItem from './index';
import userEvent from '@testing-library/user-event';

describe('TodoItem Component', () => {
  const handler = jest.fn();

  const { container } = render(
    <BrowserRouter>
      <TodoItem
        data={{
          id: '1',
          title: 'Todo title',
          description: 'description',
          date: '2022-07-20T05:13:54.360Z',
          isCheck: true,
        }}
        onDelete={handler}
        onChangeCheck={handler}
      />
    </BrowserRouter>
  );

  const checkedIcon = screen.getByTestId('checked');

  it('isCheck가 true일 경우 checkedIcon을 화면에 나타냅니다.', () => {
    expect(checkedIcon).toBeInTheDocument();
  });

  it('To Do title을 화면에 나타냅니다.', () => {
    waitFor(() => {
      const title = screen.findByText('Todo title');
      expect(title).toBeVisible();
    });
  });

  it('check 아이콘 클릭 시 handler는 1번 호출됩니다.', () => {
    waitFor(() => {
      userEvent.click(checkedIcon);
      expect(handler).toBeCalledTimes(1);
    });
  });

  it('버튼 클릭 시 handler는 1번 호출됩니다.', () => {
    waitFor(() => {
      const button = container.querySelector('.button');
      fireEvent.click(button! as Element)!;
      expect(handler).toBeCalledTimes(1);
    });
  });
});
