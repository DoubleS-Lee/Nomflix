import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
    padding: 20px;
`;


export default function TVPresenter({topRated, popular, airingToday, error, loading}) {
    return (
        <>
            <Helmet>
                <title>TVShow | Nomflix</title>
            </Helmet>
            {loading ? <Loader /> :
                <Container>
                    {topRated && 
                        topRated.length > 0 
                            && (<Section title="Top Rated TV Shows">
                                    {topRated.map((tvShow) => <Poster 
                                                            key={tvShow.id} 
                                                            id={tvShow.id} 
                                                            year={tvShow.first_air_date && tvShow.first_air_date.substring(0,4)} 
                                                            title={tvShow.original_name} 
                                                            rating={tvShow.vote_average} 
                                                            imageUrl={tvShow.poster_path} 
                                                            isMovie={false}/>)}
                                </Section>)}
                    {popular && 
                        popular.length > 0 && 
                            (<Section title="Popular TV Shows">
                                {popular.map((tvShow) => <Poster 
                                                            key={tvShow.id} 
                                                            id={tvShow.id} 
                                                            year={tvShow.first_air_date && tvShow.first_air_date.substring(0,4)} 
                                                            title={tvShow.original_name} 
                                                            rating={tvShow.vote_average} 
                                                            imageUrl={tvShow.poster_path} 
                                                            isMovie={false}/>)}
                            </Section>)}
                    {airingToday && 
                        airingToday.length > 0 && 
                            (<Section title="Airing Today TV Shows">
                                {airingToday.map((tvShow) => <Poster 
                                                            key={tvShow.id} 
                                                            id={tvShow.id} 
                                                            year={tvShow.first_air_date && tvShow.first_air_date.substring(0,4)} 
                                                            title={tvShow.original_name} 
                                                            rating={tvShow.vote_average} 
                                                            imageUrl={tvShow.poster_path} 
                                                            isMovie={false}/>)}
                            </Section>)}
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>
            }
        </>
    )
}

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}
