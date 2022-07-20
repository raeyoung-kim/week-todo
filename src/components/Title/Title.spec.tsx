import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Title from './index';

describe('Title Component', () => {
  render(
    <BrowserRouter>
      <Title title={'title'} description={'description'} />
    </BrowserRouter>
  );

  it('title 텍스트를 화면에 나타냅니다.', () => {
    const title = screen.getByText('title');
    expect(title).toBeInTheDocument();
  });

  it('description 텍스트를 화면에 나타냅니다.', () => {
    const description = screen.findByText('description');
    expect(description).toBeTruthy();
  });
});
