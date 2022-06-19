import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="flex justify-center w-full border-black bg-slate-600 text-white">
    <nav className="flex justify-between items-center w-full max-w-[80%]">
      <img src={import.meta.env.VITE_LOGO_PATH} alt="logo" />
      <div className="flex gap-6 ">
        <Link to="/" className="text-2xl hover:text-sky-400">
          Home
        </Link>
        <Link to="/favorites" className="text-2xl hover:text-sky-400">
          Favorites
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
