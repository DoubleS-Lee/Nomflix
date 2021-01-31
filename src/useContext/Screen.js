import React, { useContext } from 'react';
import { UserContext } from './Context';
import Header from './Header';

export default function Screen () {
    const {LogUserIn} = useContext(UserContext);

    return (
        <div>
            <Header />
            <button onClick={LogUserIn}>유저 로그인 버튼</button>
        </div>
    )
}