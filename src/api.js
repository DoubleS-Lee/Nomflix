// yarn add axios
// axios로 새로운 axios 인스턴스를 만들어 놓을 수도 있다
// 기본적으로 적용되는 값들을 미리 설정 해놓음으로써 중복 코딩을 방지할 수 있다

import axios from 'axios';

const api = axios.create({
                baseURL: "https://api.themoviedb.org/3/",
                // api를 요청할때 api_key는 필수로 입력해야하고 language는 옵션 사항인데
                // 어쨌든 params에 넣어서 전달한다
                params: {
                    api_key: "5278ad8b44de73cdf551b379b01facdd",
                    language: "en-US"
                }
            });


// 이 앱에서 쓸 api 경로를 이 곳에서 모두 지정해준다
// api 함수를 가져와서 get()으로 뒤에 주소를 추가해준다
// axios.get에서 경로 지정할때 '/' 이렇게 시작해버리면 절대경로로 인식해서 baseURL을 적용하지 않는 사태가 발생하니까 /로 시작하지 않도록 주의할 것
export const moviesApi = {
    nowPlaying: () => api.get('movie/now_playing'),
    upcoming: () => api.get('movie/upcoming'),
    popular: () => api.get('movie/popular'),
    // Detail 페이지로 갈때 id가 필요하다
    // params - append_to_response를 사용해서 videos를 입력하면 videos 정보까지 가져온다 (여기서는 선택사항이다)
    movieDetail: (id) => api.get(`movie/${id}`,{
        params: {
            append_to_response: "videos"
        }
    }),
    // 검색을 위해서는 query값을 필수로 입력해야하는데 term로 입력값을 받은 다음에 이를 적용시켜준다
    search: (term) => api.get('search/movie', {
        params: {
            // 검색어의 스페이스나 느낌표같은 특수문자를 인코딩하기 위해 term에 encodeURLComponent를 씌워준다
            query: encodeURIComponent(term),
            // language: "ko-KR",
        }
    })
};

export const tvApi ={
    topRated: () => api.get('tv/top_rated'),
    popular: () => api.get('tv/popular'),
    airingToday: () => api.get('tv/airing_today'),
    tvDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get('search/tv',{
        params:{
            query: encodeURIComponent(term)
        }
    })
};