import { createContext, useContext } from 'react';

const AuthContext = createContext();

export { AuthContext };

export function useAuth() {
    return useContext(AuthContext);
}