import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;


export default function SearchPresenter ({movieResults, TVResults, searchTerm, error, loading, handleSummit, updateTerm}) {
    return (
        <Container>
            <Helmet>
                <title>Search | Nomflix</title>
            </Helmet>
            <Form onSubmit={handleSummit}>
                <Input onChange={updateTerm} placeholder="검색을 원하는 영화나 TV 쇼를 입력해주세요" value={searchTerm}/>
            </Form>
            {loading ? <Loader/> : <>
                {movieResults && movieResults.length>0 && (
                    <Section title="Movie Result">
                        {movieResults.map((movie) => <Poster 
                                                            key={movie.id} 
                                                            id={movie.id} 
                                                            year={movie.release_date && movie.release_date.substring(0,4)} 
                                                            title={movie.original_title} 
                                                            rating={movie.vote_average} 
                                                            imageUrl={movie.poster_path} 
                                                            isMovie={false}/>)}
                    </Section>)}
                {TVResults && TVResults.length>0 && (
                    <Section title="TV Show Result">
                        {TVResults.map((tvShow) => <Poster 
                                                            key={tvShow.id} 
                                                            id={tvShow.id} 
                                                            year={tvShow.first_air_date && tvShow.first_air_date.substring(0,4)} 
                                                            title={tvShow.original_name} 
                                                            rating={tvShow.vote_average} 
                                                            imageUrl={tvShow.poster_path} 
                                                            isMovie={false}/>)}
                    </Section>)}
                {error && <Message color="#e74c3c" text={error} />}
                {TVResults && movieResults && TVResults === 0 && movieResults === 0 && (<Message color="#95a5a6" text="검색 결과가 없습니다" />)}
                </>
            }

        </Container>
    )
}

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    TVResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSummit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}