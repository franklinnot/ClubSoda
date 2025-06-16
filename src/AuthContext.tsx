// src/context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { authService } from "./classes/AuthService";
import type { IUserAuth } from "./classes/interfaces/iuser";

interface AuthContextType {
  isAuthenticated: boolean;
  user: IUserAuth | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>; // Puedes tipar mejor userData aquí
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserAuth | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Al cargar la aplicación, verifica si ya hay un usuario autenticado en localStorage
    const authenticatedUser = authService.getAuthenticatedUser();
    if (authenticatedUser) {
      setUser(authenticatedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    const authenticatedUser = authService.login(email, password);
    if (authenticatedUser) {
      setUser(authenticatedUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleRegister = async (userData: any): Promise<boolean> => {
    // Aquí podrías añadir validaciones adicionales antes de registrar
    const success = authService.register(userData);
    if (success) {
      // Opcional: Iniciar sesión automáticamente después del registro
      const loginSuccess = authService.login(userData.email, userData.password);
      if (loginSuccess) {
        setUser(loginSuccess);
        setIsAuthenticated(true);
        return true;
      }
    }
    return false;
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
