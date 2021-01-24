import React, { useState } from 'react';
import HomePresenter from './HomePresenter';

export default function HomeContainer() {
    const [state, setState] = useState({
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true,
    });

    const {nowPlaying, upcoming, popular, error, loading} = state;

    return(
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









