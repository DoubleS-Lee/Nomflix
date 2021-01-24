import React, { useState } from 'react';
import DetailPresenter from './DetailPresenter';

export default function DetailContainer() {
    const [state, setState] = useState({
        result: null,
        error: null,
        loading: true,
    });

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