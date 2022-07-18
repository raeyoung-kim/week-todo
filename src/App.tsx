import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddPage, ListPage } from './pages';
import ModifyPage from './pages/ModifyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<ListPage />} />
        <Route path={'/add'} element={<AddPage />} />
        <Route path={'/modify/:id'} element={<ModifyPage />} />
      </Routes>
    </div>
  );
}

export default App;
