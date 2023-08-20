import { Auth, User } from "firebase/auth";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type AuthUser = {
    user: User,
    isNewUser: boolean,
}

type AuthContextType = {
    user?: AuthUser, setUser?: Dispatch<SetStateAction<AuthUser | undefined>>
}

export const AuthContext = createContext<AuthContextType>({});

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
    const [user, setUser] = useState<AuthUser>();

    return (
        <AuthContext.Provider value={{ user, setUser }} >
            {children}
        </AuthContext.Provider>
    )
}