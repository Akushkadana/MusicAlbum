// src/pages/About.jsx
export default function About() {
  return (
      <div className="px-6 lg:px-12 xl:px-32 py-16 w-full">
      <h1 className="text-5xl md:text-7xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        О проекте
      </h1>

        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 lg:p-20 xl:p-32 shadow-2xl border border-purple-800/30 space-y-10 text-lg md:text-xl leading-relaxed w-full max-w-none">
        <p className="text-gray-200">
        Это <span className="text-pink-400 font-bold">Music</span> — мой авторский музыкальный каталог <span className="text-cyan-400"></span>.
        </p>

        <p className="text-gray-200">
          Здесь собраны <span className="text-yellow-400 font-bold"> легендарные альбомы</span> 2015–2025 годов, которые взрывали чарты, TikTok и Spotify среди молодёжи: от The Weeknd и Billie Eilish до Cardi B, Eminem и Olivia Rodrigo.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-purple-900/30 rounded-2xl p-6 border border-purple-700">
            <h3 className="text-2xl font-bold text-pink-400 mb-3">Будущее улучшение</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Тексты песен с переводами</li>
              <li>Создание собственных плейлистов</li>
              <li>Прослушивание в оффлайн формате</li>
              <li>Возможно караоке формат</li>
            </ul>
          </div>

          <div className="bg-purple-900/30 rounded-2xl p-6 border border-purple-700">
            <h3 className="text-2xl font-bold text-pink-400 mb-3">В стадии добавления..</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Ulukmanapo</li>
              <li>Jax Khalib</li>
              <li>Bakr</li>
              <li>Jony</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-2xl mt-12">
          Спасибо, что заглянул! 🎧✨
        </p>
        <p className="text-center text-gray-400">
          Сделано с любовью к музыке❤️
        </p>
      </div>
    </div>
  );
}