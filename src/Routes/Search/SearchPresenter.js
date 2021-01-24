import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export default function SearchPresenter ({movieResults, TVResults, searchTerm, error, loading, handleSummit}) {
    return (
        <div>
            SearchPresenter
        </div>
    )
}

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    TVResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSummit: PropTypes.func.isRequired
    
}