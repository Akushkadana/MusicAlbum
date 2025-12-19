import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBasket } from "../context/BasketContext";

export default function Layout() {
  const { user, logout } = useAuth(); 
  const { totalItems } = useBasket();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-black text-white flex flex-col">
      {/* HEADER */}
      <header className="bg-black/60 backdrop-blur-lg border-b border-purple-800/30 sticky top-0 z-50 w-full">
        <div className="px-6 py-5 flex items-center justify-between max-w-screen-2xl mx-auto w-full">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold shadow-2xl group-hover:scale-110 transition">
              ♫
            </div>
            <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              MusicCatalog
            </span>
          </Link>

          {/* НАВИГАЦИЯ */}
          <nav className="flex items-center gap-6 lg:gap-10 text-lg">
            <Link to="/" className="hover:text-pink-400 transition font-medium">
              Главная
            </Link>
            <Link to="/about" className="hover:text-pink-400 transition font-medium">
              О проекте
            </Link>
            <Link to="/contacts" className="hover:text-pink-400 transition font-medium">
              Контакты
            </Link>
            <Link to="/basket" className="hover:text-pink-400 transition font-medium flex items-center gap-2">
              Корзина
              {totalItems > 0 && (
                <span className="bg-pink-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* АВТОРИЗАЦИЯ */}
            {user ? (
              <div className="flex items-center gap-6">
                <span className="text-pink-400 font-medium">Привет, {user.name}!</span>
                <button
                  onClick={logout}
                  className="bg-gray-800/50 hover:bg-red-600/40 hover:text-red-400 px-5 py-2 rounded-lg border border-gray-700 hover:border-red-500 transition font-medium"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="hover:text-pink-400 transition font-medium">
                  Войти
                </Link>
                <Link
                  to="/register"
                  className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg transition font-medium shadow-lg"
                >
                  Регистрация
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-black/70 backdrop-blur-sm border-t border-purple-900/30 py-8 w-full">
        <div className="px-6 text-center max-w-screen-2xl mx-auto w-full">
          <p className="text-gray-400">
            © 2025 MusicCatalog • Сделано с любовью к музыке и React ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}