import { useParams, Link } from "react-router-dom";
import { music } from "../data/music";

export default function AlbumDetail() {
  const { id } = useParams();
  const album = music.find(a => a.id === Number(id));

  if (!album) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl">
        Альбом не найден 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white py-12 lg:py-20">
      {/* Кнопка "Назад" — чуть отступ слева */}
      <div className="px-6 lg:px-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 text-pink-400 hover:text-pink-200 transition text-xl font-medium mb-10"
        >
          ← Назад к каталогу
        </Link>
      </div>

      {/* ГЛАВНОЕ ИЗМЕНЕНИЕ: убрали max-w-6xl → теперь на весь экран! */}
      <div className="px-6 lg:px-12 xl:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-start max-w-screen-2xl mx-auto w-full">
          
          {/* Обложка альбома — стала крупнее и красивее */}
          <div className="flex justify-center md:justify-end">
            <img 
              src={album.cover} 
              alt={album.album} 
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Информация об альбоме */}
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                {album.album}
              </h1>
              <p className="text-3xl sm:text-4xl lg:text-5xl text-pink-400 mt-4">
                {album.artist}
              </p>
              <p className="text-xl lg:text-2xl text-gray-300 mt-3 opacity-90">
                {album.year} • {album.genre}
              </p>
              <p className="text-5xl lg:text-6xl text-yellow-400 font-bold mt-8">
                ⭐ {album.rating}
              </p>
            </div>

            <div className="text-lg lg:text-xl leading-relaxed text-gray-200 space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">О альбоме</h2>
                <p className="text-xl lg:text-2xl">{album.description}</p>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">Лучшие треки:</h3>
                <p className="text-xl lg:text-2xl font-medium">{album.tracks}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}