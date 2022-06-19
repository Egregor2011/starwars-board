import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import FavoriteList from './pages/FavoriteList';
import Home from './pages/Home';
import Person from './pages/Person';

const App: FC = () => (
  <BrowserRouter>
    <Header />
    <main className="max-w-[80%] m-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
