// yarn add axios
// axios로 새로운 axios 인스턴스를 만들어 놓을 수도 있다
// 기본적으로 적용되는 값들을 미리 설정 해놓음으로써 중복 코딩을 방지할 수 있다

import axios from 'axios';

export default function api () {
    axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        params: {
            api_key: "5278ad8b44de73cdf551b379b01facdd",
            language: "en-US"
        }
    })
}
