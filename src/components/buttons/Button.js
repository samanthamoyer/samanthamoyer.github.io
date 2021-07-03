import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
  BUTTON_BG_COLOR_PRIMARY,
  BUTTON_BG_COLOR_SECONDARY,
  BUTTON_BG_COLOR_TERTIARY,
  BUTTON_FG_COLOR_PRIMARY,
  BUTTON_FG_COLOR_SECONDARY,
  BUTTON_FG_COLOR_TERTIARY,
 } from '../../constants/theme';

const USE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const BG_COLOR = {
  [USE.PRIMARY]: BUTTON_BG_COLOR_PRIMARY,
  [USE.SECONDARY]: BUTTON_BG_COLOR_SECONDARY,
  [USE.TERTIARY]: BUTTON_BG_COLOR_TERTIARY,
}

const TEXT_COLOR = {
  [USE.PRIMARY]: BUTTON_FG_COLOR_PRIMARY,
  [USE.SECONDARY]: BUTTON_FG_COLOR_SECONDARY,
  [USE.TERTIARY]: BUTTON_FG_COLOR_TERTIARY,
}

const StyledButton = styled.button`
  width: ${({ fill }) => fill ? '100%' : 'auto'};
  border: none;
  padding: 10px;
  background-color: ${({ use }) => BG_COLOR[use]};
  color: ${({ use }) => TEXT_COLOR[use]};
  font-size: 14pt;
`;

export default function Button({ use, onClick, type, disabled, fill, children }) {
  return (
    <StyledButton use={use} type={type} disabled={disabled} fill={fill} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  use: PropTypes.oneOf([USE.PRIMARY, USE.SECONDARY, USE.TERTIARY]),
  type: PropTypes.oneOf(['submit', 'button']),
  disabled: PropTypes.bool,
  fill: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  use: USE.PRIMARY,
}
