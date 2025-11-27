import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type User, getUser, saveUser, clearUser } from '@/lib/storage';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    // Mock authentication - in production, this would call an API
    if (username === 'admin' && password === 'admin') {
      const newUser: User = {
        id: '1',
        username: 'admin',
        role: 'admin',
      };
      setUser(newUser);
      saveUser(newUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    clearUser();
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
