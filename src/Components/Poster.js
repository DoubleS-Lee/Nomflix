import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.span``;

const Year = styled.span``;

const Title = styled.span``;

export default function Poster ({id, year, title, rating, imageUrl, isMovie=false}) {

    return (
        <Link to={isMovie ? `/movie/${id}` : `/tvshow/${id}`}>
            <Container>
                <ImageContainer>
                    <Image bgUrl={imageUrl}/>
                    <Rating>
                        <span role='img' aria-label="rating">
                            💛
                        </span>{" "}
                        {rating}/10
                    </Rating>
                </ImageContainer>
                <Title>{title}</Title>
                <Year>{year}</Year>
            </Container>
        </Link>
    )
}

Poster.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.string,
    title:PropTypes.string.isRequired,
    imageUrl:PropTypes.string,
    rating:PropTypes.number,
    isMovie:PropTypes.bool
}