import React, { useEffect, useState } from 'react';
import { moviesApi, tvApi } from '../../api';
import DetailPresenter from './DetailPresenter';

// Route를 통해 열리는 component는 props를 기본으로 가지고 있다
export default function DetailContainer(props) {
    const [state, setState] = useState({
        result: null,
        error: null,
        loading: true,
    });

    const getInfo = async() => {
        // console.log(props);
        const {match:{params:{id}}, history, location:{pathname}} = props;
        // console.log(id);

        // id값을 가져오고 int로 변환시킨 다음 변환이 안되면 페이지를 home으로 돌려보낸다
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            history.push('/');
        }

        // 해당 id의 영화/tv 내용을 담을 result는 항상 값이 변해야하기 때문에 let으로 선언해놓는다
        // 그리고 해당 id의 영화/tv 내용을 담기전에는 null로 선언한다
        let result = null;
        try {
            // 만약 props.location.pathname에 '/movie/'가 포함되어 있다면 true
            if (pathname.includes("/movie/")) {
                // result를 let으로 선언해줬기 때문에 아래에서 const를 사용하면 안된다
                // 대신 ()를 사용해서 let을 선언해준 효과를 계속 가져간다
                ({data:result} = await moviesApi.movieDetail(parsedId));
                // console.log(result);
            } else {
                ({date:result} = await tvApi.tvDetail(parsedId));
            }
        } catch {
            setState({
                error:"정보를 찾을 수 없습니다",
            });
        } finally {
            setState({
                loading: false,
                result:result,
            });
        }        
    };

    useEffect(() => {
        getInfo();
    },[])

    const { result, error, loading } = state;
    return(
        <div>
            <DetailPresenter 
                result={result}
                error={error}
                loading={loading}
            />
        </div>
    )
}
