import AlbumCard from "../components/AlbumCard";
import { music } from "../data/music";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-black text-white py-12">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Музыкальный Каталог
        </h1>
        <p className="text-center text-xl text-gray-400 mt-4">
           Лучшие альбомы последних лет
        </p>
      </div>

      {/* ← ВОТ ЭТО ГЛАВНОЕ ИЗМЕНЕНИЕ → */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 max-w-screen-2xl mx-auto">
          {music.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
}