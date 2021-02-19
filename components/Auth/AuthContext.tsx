import { createContext } from 'react';
import mongodb from 'mongodb';

interface AuthContextInterface {
  isLoggedIn: Boolean;
  userId: mongodb.ObjectID | null;
  token: string | null;
  login: (uid: any, token: any) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextInterface);

export default AuthContext;
