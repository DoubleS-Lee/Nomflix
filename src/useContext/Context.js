import React, { useState, useContext } from 'react';

export const UserContext = React.createContext();


export default function UserContextProvider ({children}) {
    const [user, setUser] = useState({
        name:"DoubleS",
        loggedIn: false,
    });

    const LogUserIn = () => setUser({...user, loggedIn:true});

    return (
        // fn 안에 LogUserIn을 담아서 보내야 받는 곳에서 구조분해를 하고 LogUserIn을 사용할 수 있음
        <UserContext.Provider value={{user, fn:{LogUserIn}}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser () {
    const {user} = useContext(UserContext);
    return user
}

export function useFns () {
    const {fn} = useContext(UserContext);
    return fn
}