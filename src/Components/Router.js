import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';


export default function Router() {
    return(
        <HashRouter>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/tv' component={TV} />
        </HashRouter>
    )
}