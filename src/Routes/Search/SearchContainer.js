import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';

export default function SearchContainer() {
    const [state, setState] = useState({
        movieResults: null,
        TVResults: null,
        searchTerm: "",
        error: null,
        loading: false,
    });

    const {movieResults, TVResults, searchTerm, error, loading} = state;

    return(
        <div>
            <SearchPresenter 
                movieResults={movieResults}
                TVResults={TVResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
            />
        </div>
    )
}