import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FORM_LABEL_COLOR } from '../../constants/theme';

const FormControlWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${({ flush }) => flush ? '0' : '15px'}
`;

const Label = styled.label`
  color: ${FORM_LABEL_COLOR};
  font-weight: 500;
  font-size: 14pt;
  margin-bottom: 2px;
`;

export default function FormControl({ label, name, children: child, flush, required }) {
  const childWithExtraProps = React.cloneElement(child, { id: name, name, required });
  return (
    <FormControlWrapper flush={flush}>
      <Label htmlFor={name}>{label}{required ? '*' : ''}</Label>
      {childWithExtraProps}
    </FormControlWrapper>
  )
}

FormControl.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  flush: PropTypes.bool,
};
