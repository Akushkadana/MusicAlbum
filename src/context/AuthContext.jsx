import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (userData) => {
    // Проверка пароли
    if (userData.password !== userData.confirmPassword) {
      throw new Error("Пароли не совпадают");
    }
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email, password) => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user.email === email) {
        setUser(user);
        return true;
      }
    }
    throw new Error("Неверный email или пароль");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);