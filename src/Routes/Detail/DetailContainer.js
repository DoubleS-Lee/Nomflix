import React, { useEffect, useState } from 'react';
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
        const {match:{params:{id}}, history} = props;
        // console.log(id);
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            history.push('/');
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
