import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export default function TVPresenter({topRated, popular, airingToday, error, loading}) {
    return (
        <div>
            TVPresenter
        </div>
    )
}

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}