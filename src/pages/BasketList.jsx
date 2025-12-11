import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext.jsx";

export default function BasketList() {
  const { basket, removeFromBasket, updateQuantity, totalPrice, totalItems } = useBasket();

  if (basket.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-black to-pink-900">
        <div className="text-center px-8">
          <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 mb-8">
            Корзина пуста
          </h1>
          <Link
            to="/"
            className="inline-block px-12 py-6 text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl hover:scale-110 transition transform shadow-2xl"
          >
            ← Вернуться к музыке
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-pink-950 pt-24 pb-32">
      {/* Заголовок */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
  Корзина ({totalItems})
</h1>
      </div>

        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Список товаров */}
        <div className="space-y-8">
          {basket.map((item) => (
            <div
              key={item.id}
              className="w-full bg-black/40 backdrop-blur-xl border border-purple-800/40 rounded-3xl p-10 flex items-center justify-between gap-12 shadow-2xl hover:border-pink-500/60 transition-all duration-300"
            >
              <img
                src={item.cover}
                alt={item.album}
                className="w-32 h-32 rounded-2xl object-cover shadow-xl"
              />

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{item.artist}</h3>
                <p className="text-xl text-gray-300">{item.album}</p>
                <p className="text-2xl font-bold text-pink-400 mt-2">
                  {item.price} KGS
                </p>
              </div>

              {/* Кнопки управления количеством */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-2xl font-bold transition"
                >
                  −
                </button>
                <span className="text-3xl font-bold w-16 text-center">{item.quantity || 1}</span>
                <button
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                  className="w-12 h-12 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center text-2xl font-bold transition"
                >
                  +
                </button>
              </div>

              {/* Кнопка удаления */}
              <button
                onClick={() => removeFromBasket(item.id)}
                className="ml-6 px-6 py-3 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-xl text-red-400 font-bold transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Итоговая сумма */}
        <div className="mt-16 text-center">
          <div className="text-4xl md:text-6xl font-black mb-12">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
    Итого: {totalPrice} KGS
  </span>
</div>
          <Link
            to="/order"
            className="inline-block px-20 py-8 text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-700 rounded-3xl hover:scale-110 transition-all duration-300 shadow-2xl transform"
          >
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
}