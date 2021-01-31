import React, { useState } from 'react';

export const UserContext = React.createContext();


export default function UserContextProvider ({children}) {
    const [user] = useState({
        name:"DoubleS",
    })
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}