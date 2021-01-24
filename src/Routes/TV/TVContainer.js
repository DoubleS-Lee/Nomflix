import React, { useState } from 'react';
import TVPresenter from './TVPresenter';

export default function TVContainer() {
    const [state, setState] = useState({
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true,
    });

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