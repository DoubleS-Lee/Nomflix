import React, {useState} from 'react';
import Screen from './Screen';

export default function UseApp () {
    const [user] = useState({
        name:"DoubleS",
    })
    return (
        <>
            <Screen user={user}/>
        </>
    )
}