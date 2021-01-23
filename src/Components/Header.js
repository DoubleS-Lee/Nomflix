// styled-components에서는 styled-components에 props를 넘겨줄 수 있다
// withRouter로 props를 다른 컴포넌트에 넘겨줄 수 있다
// withRouter로 props를 넘겨받을 함수를 감싸주기만 하면 된다
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header`
    color: white;
    positionn: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    background-color: rgba(20, 20, 20, 0.8);
    z-index: 20;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    // transparent는 투명이라는 뜻이다
    // props를 받아서 current 값에 따라 효과를 바꿔줌
    border-bottom: 3px solid ${props => (props.current ? "#3498db" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-item: center;
    justify-content: center;
`;


function Header (props) {
    // console.log(props);
    const {location:{pathname}} = props;
    // console.log(pathname);
    return (
        <SHeader>
            <List>
                {/* props에 current라는 변수를 담아서 함께 Item에 넘겨준다 */}
                <Item current={pathname === '/'}>
                    <SLink to='/'>Movies</SLink>
                </Item>
                <Item current={pathname === '/tv'}>
                    <SLink to='/tv'>TV</SLink>
                </Item>
                <Item current={pathname === '/search'}>
                    <SLink to='/search'>Search</SLink>
                </Item>
            </List>
        </SHeader>
    )
}

export default withRouter(Header);