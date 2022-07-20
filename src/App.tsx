import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AddPage, ListPage, ModifyPage, NotFoundPage } from './pages';
import './App.css';

function App() {
  return (
    <div data-testid="app">
      <Routes>
        <Route path={'/'} element={<ListPage />} />
        <Route path={'/add'} element={<AddPage />} />
        <Route path={'/modify/:id'} element={<ModifyPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
