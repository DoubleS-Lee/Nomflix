import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Detail from '../Routes/Detail';
import Header from './Header';


export default function Router() {
    return(
        <BrowserRouter>
            <>
                <Header />
                {/* Switch는 특정 주소를 찾아갈때 Route를 순서대로 읽다가 일치하는 주소가 나오면 거기서 읽는 것을 멈추고 결과를 출력하게 한다 */}
                {/* Switch를 안쓰고 Redirect를 쓰면 모든 페이지에서 Redirect를 해버리게 된다 */}
                <Switch>
                    {/* exact를 써야 주소상 경로에 있는 모든 페이지를 렌더링하는 사태를 막을 수 있다 */}
                    <Route exact path='/' component={Home} />
                    <Route exact path='/tv' component={TV} />
                    <Route path='/search' component={Search} />
                    <Route path='/movie/:id' component={Detail} />
                    <Route path='/tvshow/:id' component={Detail} />
                    {/* Redirect : 내가 설정해준 주소가 없으면 그 외의 모든 주소값에 대해(from='*') 해당 페이지(to='/')를 불러온다 */}
                    {/* Switch와 함께 써야 함 */}
                    <Redirect from='*' to='/' />
                </Switch>
            </>
        </BrowserRouter>
    )
}

