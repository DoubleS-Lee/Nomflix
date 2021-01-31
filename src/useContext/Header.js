import React, { useContext } from 'react';
import { UserContext } from './Context';

export default function Header () {
    const {user:{name}} = useContext(UserContext);
    // console.log(user)
    return (
        <header>
            Hello, {name}!
        </header>
    )
}