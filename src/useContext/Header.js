import React, { useContext } from 'react';
import { UserContext, useUser } from './Context';

export default function Header () {
    const {name, loggedIn} = useUser();
    return (
        <header>
            Hello, {name}! I am {loggedIn ? "Logged In" : "Logged out"}
        </header>
    )
}