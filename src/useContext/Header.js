import React, { useContext } from 'react';
import { UserContext } from './Context';

export default function Header () {
    const {user:{name, loggedIn}} = useContext(UserContext);
    // console.log(user)
    return (
        <header>
            Hello, {name}! I am {loggedIn ? "Logged In" : "Logged out"}
        </header>
    )
}