import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    login(email, password);
    navigate("/");
  } catch (err: any) {
    setError(err.message || "Неверный email");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-purple-950 via-black to-black">
      <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-10 max-w-md w-full shadow-2xl border border-purple-800/30">
        <h2 className="text-4xl font-bold text-center mb-8 text-pink-400">
          Вход
        </h2>

        {error && (
          <p className="text-red-400 text-center mb-6 bg-red-900/30 py-3 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 bg-gray-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
          />
          <input
            type="password"
            placeholder="Пароль"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 bg-gray-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-70 disabled:cursor-not-allowed py-4 rounded-xl font-bold text-xl transition transform hover:scale-105"
          >
            {loading ? "Входим..." : "Войти"}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-400">
          Нет аккаунта?{" "}
          <Link to="/register" className="text-pink-400 hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}