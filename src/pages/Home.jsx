import AlbumCard from "../components/AlbumCard";
import { music } from "../data/music";

export default function Home() {
  return (
    <>

      <div className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Музыкальный Каталог
        </h1>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 max-w-screen-2xl mx-auto">
          {music.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </>
    
  );
}