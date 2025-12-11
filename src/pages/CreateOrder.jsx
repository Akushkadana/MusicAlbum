import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext.jsx";

export default function CreateOrder() {
  const { basket, totalPrice, clearBasket } = useBasket();

  if (basket.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-950 to-black">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">Корзина пуста</h1>
          <Link
            to="/"
            className="mt-8 inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-xl font-bold hover:scale-105 transition transform"
          >
            ← Вернуться к покупкам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Оформление заказа
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Левая колонка — товары */}
          <div className="bg-black/40 backdrop-blur-md border border-purple-800/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Ваша корзина</h2>
            <div className="space-y-4">
              {basket.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-black/60 rounded-xl p-4 border border-purple-700/20"
                >
                  <img
                    src={item.cover}
                    alt={item.album}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{item.artist}</h4>
                    <p className="text-gray-400">{item.album}</p>
                    <p className="text-pink-400 font-bold">
                      {item.quantity > 1 && `${item.quantity} × `}{item.price} KGS
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-purple-700/30">
              <div className="flex justify-between text-2xl font-bold">
                <span>Итого:</span>
                <span className="text-pink-400">{totalPrice} KGS</span>
              </div>
            </div>
          </div>

          {/* Правая колонка — форма */}
          <div className="bg-black/40 backdrop-blur-md border border-purple-800/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8">Ваши данные</h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Имя и фамилия"
                className="w-full px-6 py-4 bg-black/60 border border-purple-700/50 rounded-xl focus:outline-none focus:border-pink-500 transition text-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-black/60 border border-purple-700/50 rounded-xl focus:outline-none focus:border-pink-500 transition text-lg"
                required
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-6 py-4 bg-black/60 border border-purple-700/50 rounded-xl focus:outline-none focus:border-pink-500 transition text-lg"
              />

              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Заказ оформлен!🎉");
                  clearBasket();
                }}
                className="w-full py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-xl font-bold rounded-xl hover:scale-105 transition transform shadow-2xl"
              >
                Оплатить {totalPrice} ₽
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="text-gray-400 hover:text-pink-400 transition text-lg"
          >
            ← Продолжить покупки
          </Link>
        </div>
      </div>
    </div>
  );
}