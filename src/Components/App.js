import React from 'react';
// Header를 호출할때 Header가 폴더이면 폴더 안에 있는 index.js 파일을 찾아들어가서 호출을 한다
// 따라서 .js 파일이 아니라 폴더로 만들때는 폴더 내에 index.js 파일을 심어줘야 한다
import Header from './Header';
import Router from './Router';

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
