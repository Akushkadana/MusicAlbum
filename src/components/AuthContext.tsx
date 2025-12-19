// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Тип пользователя
interface User {
  name: string;
  email: string;
  phone: string;
}

// Тип для контекста
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (userData: { name: string; email: string; phone: string; password: string; confirmPassword: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// Создаём контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Провайдер
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Загружаем пользователя из localStorage при старте
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (userData: { name: string; email: string; phone: string; password: string; confirmPassword: string }) => {
    if (userData.password !== userData.confirmPassword) {
      throw new Error("Пароли не совпадают");
    }

    const newUser: User = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    };

    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email: string, password: string) => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      if (parsed.email === email) {
        setUser(parsed);
        return;
      }
    }
    throw new Error("Неверный email или пароль");
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Хук для использования
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};