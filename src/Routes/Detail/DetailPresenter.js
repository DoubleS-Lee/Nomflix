import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function DetailPresenter({result, error, loading}) {

    return (
        <div>
            DetailPresenter
        </div>
    )
}

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};