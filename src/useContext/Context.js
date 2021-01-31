import React, { useState } from 'react';

export const UserContext = React.createContext();


export default function UserContextProvider ({children}) {
    const [user, setUser] = useState({
        name:"DoubleS",
        loggedIn: false,
    });

    const LogUserIn = () => setUser({...user, loggedIn:true});

    return (
        <UserContext.Provider value={{user, LogUserIn}}>
            {children}
        </UserContext.Provider>
    )
}