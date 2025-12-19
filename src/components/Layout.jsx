// src/components/Layout.jsx
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBasket } from "../context/BasketContext"; // если хочешь счётчик в корзине

export default function Layout() {
  const { user, logout, isAuthenticated } = useAuth(); // ← добавили это!
  const { totalItems } = useBasket(); // ← если хочешь число в корзине (опционально)

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
          <nav className="flex items-center gap-8 text-lg">
            <Link to="/" className="hover:text-pink-400 transition font-medium">
              Главная
            </Link>
            <Link to="/about" className="hover:text-pink-400 transition font-medium">
              О проекте
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
            {isAuthenticated || user ? (
              <div className="flex items-center gap-4">
                <span className="text-pink-400">Привет, {user?.name || 'Пользователь'}!</span>
                <button onClick={logout} className="text-gray-400 hover:text-red-400 transition">
                  Выйти
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="hover:text-pink-400 transition">
                  Войти
                </Link>
                <Link to="/register" className="bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-lg transition">
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