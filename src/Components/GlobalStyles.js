// yarn add styled-reset : css를 초기화해서 0의 상태에서 시작하게 함(global css를 적용하기 위함)
// 여기서 전체 홈페이지를 위한 global style을 만들어준다

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    {/* reset으로 현재 적용되고 있는 모든 css를 일단 한번 제거해준다 */}
    ${reset};
    
    // a 태그에 대해 적용
    a{
        text-decoration: none;
        color: inherit;
    }

    // 기타 모든 태그에 적용되는 스타일
    *{
        box-sizing: border-box;
    }

    body{
        font-family: Georgia
        font-size:12px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
        padding-top: 50px;
    }

`;

export default globalStyles;