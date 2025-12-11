import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-black text-white flex flex-col">
      <header className="bg-black/60 backdrop-blur-lg border-b border-purple-800/30 sticky top-0 z-50 w-full">
          <div className="px-6 py-5 flex items-center justify-between max-w-screen-2xl mx-auto w-full">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold shadow-2xl group-hover:scale-110 transition">
                ♫
              </div>
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                Music
              </span>
            </Link>

            <nav className="flex items-center gap-10 text-lg">
              <Link to="/" className="hover:text-pink-400 transition font-medium">
                Главная
              </Link>
              <Link to="/about" className="hover:text-pink-400 transition font-medium">
                О проекте
              </Link>
              <Link to="/basket" className="hover:text-pink-400 transition font-medium">
  Корзина
</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 w-full">
          <Outlet />
        </main>
        <footer className="bg-black/70 backdrop-blur-sm border-t border-purple-900/30 py-8 w-full">
          <div className="px-6 text-center max-w-screen-2xl mx-auto w-full">
            <p className="text-gray-400">
              © 2025 MusicCatalog • Сделано с любовью к музыке❤️
            </p>
          </div>
        </footer>
      </div>
  );
}