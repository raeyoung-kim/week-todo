import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Loading from './index';

describe('Loading Component', () => {
  render(
    <BrowserRouter>
      <Loading />
    </BrowserRouter>
  );

  it('Loading render', () => {
    const loading = screen.getByTestId('loading');
    expect(loading).toBeVisible();
  });
});
