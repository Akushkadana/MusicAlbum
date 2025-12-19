import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      register(form);
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Ошибка регистрации. Проверьте данные.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950 via-black to-black py-12">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-black/40 backdrop-blur-lg rounded-3xl p-8 sm:p-10 lg:p-16 shadow-2xl border border-purple-800/30">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 text-pink-400">
          Регистрация
        </h2>

        {error && (
          <p className="text-red-400 text-center mb-8 bg-red-900/30 py-4 px-6 rounded-xl text-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
          <input
            type="text"
            placeholder="Имя"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-6 py-5 text-lg bg-gray-800/50 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-500 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-6 py-5 text-lg bg-gray-800/50 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-500 text-white placeholder-gray-400"
          />
          <input
            type="tel"
            placeholder="Телефон (+79123456789)"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-6 py-5 text-lg bg-gray-800/50 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-500 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Пароль"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-6 py-5 text-lg bg-gray-800/50 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-500 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            required
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            className="w-full px-6 py-5 text-lg bg-gray-800/50 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-500 text-white placeholder-gray-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-70 py-5 rounded-xl font-bold text-xl lg:text-2xl transition transform hover:scale-105 shadow-lg"
          >
            {loading ? "Регистрация..." : "Зарегистрироваться"}
          </button>
        </form>

        <p className="text-center mt-10 text-gray-400 text-lg">
          Уже есть аккаунт?{" "}
          <Link to="/login" className="text-pink-400 hover:underline font-medium">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}