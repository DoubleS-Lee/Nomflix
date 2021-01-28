import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';

const Container = styled.div`
    padding: 0px 20px;
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
            <Form onSubmit={handleSummit}>
                <Input onChange={updateTerm} placeholder="검색을 원하는 영화나 TV 쇼를 입력해주세요" value={searchTerm}/>
            </Form>
            {loading ? <Loader/> : <>
                {movieResults && movieResults.length>0 && (
                    <Section title="Movie Result">
                        {movieResults.map((movie) => <span>{movie.title}</span>)}
                    </Section>)}
                {TVResults && TVResults.length>0 && (
                    <Section title="TV Show Result">
                        {TVResults.map((tvShow) => <span>{tvShow.name}</span>)}
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