import React, { useState } from 'react';
import { moviesApi, tvApi } from '../../api';
import SearchPresenter from './SearchPresenter';

export default function SearchContainer() {
    const [state, setState] = useState({
        movieResults: null,
        TVResults: null,
        searchTerm: "",
        error: null,
        loading: false,
    });

    const handleSummit = (e) => {
        // console.log(e);
        e.preventDefault();
        const {searchTerm} = state;
        if (searchTerm !== "") {
            searchByTerm();
        }
    }

    const updateTerm = (e) => {
        const {target:{value}} = e;
        // console.log(value);
        setState({
            searchTerm:value
        });
        // console.log(searchTerm);
    }

    const searchByTerm = async() => {
        // console.log(searchTerm);
        const {searchTerm} = state;
        setState({
            loading: true,
        });
        try {
            const {data:{results:movieResults}} = await moviesApi.search(searchTerm);
            // console.log(movieResults);
            const {data:{results:TVResults}} = await tvApi.search(searchTerm);
            setState({
                movieResults:movieResults,
                TVResults:TVResults,
                loading:false,
            })
        } catch {
            setState({
                error:"검색 결과를 찾을 수 없습니다",
                loading:false,
            })
        }
    }

    const {movieResults, TVResults, searchTerm, error, loading} = state;

    return(
        <div>
            <SearchPresenter 
                movieResults={movieResults}
                TVResults={TVResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSummit={handleSummit}
                updateTerm={updateTerm}
            />
        </div>
    )
}