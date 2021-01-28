import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';

const Container = styled.div`
    padding: 0px 10px;
`;


export default function TVPresenter({topRated, popular, airingToday, error, loading}) {
    return (
        <>
            {loading ? <Loader /> :
                <Container>
                    {topRated && 
                        topRated.length > 0 
                            && (<Section title="Top Rated TV Shows">
                                    {topRated.map((tvshow) => tvshow.name)}
                                </Section>)}
                    {popular && 
                        popular.length > 0 && 
                            (<Section title="Popular TV Shows">
                                {popular.map((tvshow) => tvshow.name)}
                            </Section>)}
                    {airingToday && 
                        airingToday.length > 0 && 
                            (<Section title="Airing Today TV Shows">
                                {airingToday.map((tvshow) => tvshow.name)}
                            </Section>)}
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
