import React from 'react';
import Header from './Header';

export default function Screen ({user}) {

    return (
        <div>
            <Header user={user}/>
            <h1>First screen</h1>
        </div>
    )
}