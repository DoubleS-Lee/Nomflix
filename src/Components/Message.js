import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

const Text = styled.span``;

export default function Message ({text, color}) {

    return(
        <Container>
            <Text color={color}>{text}</Text>
        </Container>
    )
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}