import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext.jsx"; // 

export default function AlbumCard({ album }) {
  const { addToBasket } = useBasket();

  const handleAddToBasket = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    addToBasket(album);
  };

  return (
    <Link to={`/album/${album.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Обложка */}
        <img
          src={album.cover}
          alt={album.album}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Градиент + информация */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h3 className="text-2xl font-bold">{album.artist}</h3>
            <p className="text-lg text-gray-200 opacity-90">
              {album.album} ({album.year})
            </p>
            <p className="text-yellow-400 text-xl font-bold mt-1">
              Rating: {album.rating}
            </p>

            {/* Цена и кнопка */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
              <span className="text-pink-400 font-bold text-xl">
                {album.price} KGS
              </span>

              <button
                onClick={handleAddToBasket}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105 active:scale-95"
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}