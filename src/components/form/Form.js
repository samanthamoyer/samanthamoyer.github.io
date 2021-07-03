import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FORM_BG_COLOR } from '../../constants/theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 30px;
  background-color: ${FORM_BG_COLOR};
`;

export default Form;