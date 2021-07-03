import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  border-radius: 40px;
`;

export default function Image({ src }) {
  return (<StyledImage src={src} />)
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
