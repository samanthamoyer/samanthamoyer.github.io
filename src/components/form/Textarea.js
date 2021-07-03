import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FORM_INPUT_TEXT_COLOR, FORM_INPUT_BG_COLOR, FORM_INPUT_HIGHLIGHT_COLOR } from '../../constants/theme';
import { darken } from 'polished';

const StyledTextarea = styled.textarea`
  font-family: Arial, Helvetica, sans-serif;
  padding: 4px;
  font-size: 13pt;
  color: ${FORM_INPUT_TEXT_COLOR};
  border: none;
  outline: 2px solid ${darken(0.3, FORM_INPUT_BG_COLOR)};
  background-color: ${FORM_INPUT_BG_COLOR};
  caret-color: ${FORM_INPUT_HIGHLIGHT_COLOR};

  &:focus {
    outline: 2px solid ${FORM_INPUT_HIGHLIGHT_COLOR};
  }

  &::placeholder {
    color: ${darken(0.3, FORM_INPUT_BG_COLOR)};
  }
`;

export default function Textarea({ placeholder, ...props }) {
  return (
    <StyledTextarea {...props} placeholder={placeholder} rows={5} />
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
};


