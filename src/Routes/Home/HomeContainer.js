import React, { useEffect, useState } from 'react';
import { moviesApi } from '../../api';
import HomePresenter from './HomePresenter';

export default function HomeContainer() {
    const [state, setState] = useState({
        nowPlaying:null,
        upcoming:null,
        popular:null,
        error:null,
        loading:true,
    });

    const getApi = async() => {
        try{
            const {data:{results:nowPlaying}} = await moviesApi.nowPlaying();
            // console.log(nowPlaying);
            const {data:{results:upcoming}} = await moviesApi.upcoming();
            const {data:{results:popular}} = await moviesApi.popular();
            setState({
                nowPlaying:nowPlaying,
                upcoming:upcoming,
                popular:popular,
                loading:false,
            });
        } catch {
            setState({
                error: "영화정보를 불러올 수 없습니다.",
                loading:false,
            });
        }
    }

    useEffect(() => {
        getApi();
    },[])

    const {nowPlaying, upcoming, popular, error, loading} = state;
    
    return (
        <div>
            <HomePresenter 
                nowPlaying = {nowPlaying}
                upcoming = {upcoming}
                popular = {popular}
                error = {error}
                loading = {loading}            
            />
        </div>
    )
}

