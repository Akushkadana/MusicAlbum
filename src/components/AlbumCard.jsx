import { Link } from "react-router-dom";

export default function AlbumCard({ album }) {
  return (
    <div className="group cursor-pointer">
      <Link to={`/album/${album.id}`}>
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <img src={album.cover} alt={album.album} className="w-full h-80 object-cover group-hover:scale-110 transition" />
          <div className="p-4 bg-gradient-to-t from-black/90 to-transparent absolute inset-0 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white">{album.artist}</h3>
            <p className="text-lg text-gray-200">{album.album} ({album.year})</p>
            <p className="text-yellow-400 text-xl font-bold">⭐ {album.rating}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}