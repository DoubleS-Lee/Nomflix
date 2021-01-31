import React from 'react';
import UserContextProvider from './Context';
import Screen from './Screen';

export default function UseApp () {

    return (
        <UserContextProvider>
            <Screen />
        </UserContextProvider>
    )
}