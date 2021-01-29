import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    // 이미지 파일 로딩
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.2s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right: 5px;
    position: absolute;
    opacity: 0;
    tramsition: opacity 0.2s linear;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity:1;
        }
    }
`;

export default function Poster ({id, year, title, rating, imageUrl, isMovie=false}) {

    return (
        <Link to={isMovie ? `/movie/${id}` : `/tvshow/${id}`}>
            <Container>
                <ImageContainer>
                    {/* 이미지 파일 로딩 */}
                    <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.png")}/>
                    <Rating>
                        <span role='img' aria-label="rating">
                            💛
                        </span>{" "}
                        {rating}/10
                    </Rating>
                </ImageContainer>
                <Title>{title.length>18 ? `${title.substring(0,18)}...` : title}</Title>
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