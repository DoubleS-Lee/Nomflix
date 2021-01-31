import React from 'react';
import { useFns } from './Context';
import Header from './Header';

export default function Screen () {
    const {LogUserIn} = useFns();
    // console.log(LogUserIn)
    return (
        <div>
            <Header />
            <button onClick={LogUserIn}>유저 로그인 버튼</button>
        </div>
    )
}