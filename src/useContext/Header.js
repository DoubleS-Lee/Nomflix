import React from 'react';

export default function Header ({user}) {
    return (
        <header>
            Hello, {user.name}!
        </header>
    )
}