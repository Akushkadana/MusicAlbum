export default function Contacts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          Контакты
        </h1>

        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-12 space-y-10 text-2xl">
          <p>Email: musiccatalog2025@gmail.com</p>
          <p>Телефон: +996 999 123 456</p>
          <p>Instagram: @musiccatalog2025</p>
          <p>Telegram: @musiccatalog</p>

          <div className="mt-16">
            <h2 className="text-4xl mb-8">Напишите нам</h2>
            <form className="space-y-6 max-w-lg mx-auto">
              <input type="text" placeholder="Ваше имя" className="w-full px-6 py-4 rounded-xl bg-gray-800/50" />
              <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-xl bg-gray-800/50" />
              <textarea placeholder="Сообщение" rows="6" className="w-full px-6 py-4 rounded-xl bg-gray-800/50"></textarea>
              <button className="w-full bg-pink-600 hover:bg-pink-700 py-4 rounded-xl font-bold text-xl">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}