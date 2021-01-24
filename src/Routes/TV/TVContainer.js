import React, { useEffect, useState } from 'react';
import { tvApi } from '../../api';
import TVPresenter from './TVPresenter';

export default function TVContainer() {
    const [state, setState] = useState({
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true,
    });

    const getApi = async() => {
        try{
            const {data:{results:topRated}} = await tvApi.topRated();
            // console.log(topRated);
            const {data:{results:popular}} = await tvApi.popular();
            const {data:{results:airingToday}} = await tvApi.airingToday();
            setState({
                topRated:{topRated},
                popular:{popular},
                airingToday:{airingToday},
            });
        } catch {
            setState({
                error:"TV 정보를 불러올 수 없습니다"
            });
        } finally {
            setState({
                loading:false,
            });
        }
        
    }

    useEffect(() => {
        getApi();

    })

    const { topRated, popular, airingToday, error, loading } = state;
    return(
        <div>
            <TVPresenter 
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                loading={loading}
            />
        </div>
    )
}