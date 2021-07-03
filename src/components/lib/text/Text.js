import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ON_LIGHT_TEXT_COLOR } from '../../../constants/theme';

const StyledText = styled.span`
  color: ${({ color }) => color};
  font-family: Arial;
  font-size: ${({ size }) => size}pt;
  font-weight: ${({ bold }) => bold ? 'bold' : 'inherit'};
  text-decoration: ${({ decoration }) => decoration};
  `;

export default function Text({ decoration, bold, size, color, children, ...props }) {
  return (
    <StyledText {...props} color={color} size={size} bold={bold} decoration={decoration}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.number,
  bold: PropTypes.bool,
  decoration: PropTypes.oneOf(["underline"]),
}

Text.defaultProps = {
  color: ON_LIGHT_TEXT_COLOR,
  size: 12,
}
