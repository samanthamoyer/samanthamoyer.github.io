import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import Form from './form/Form';
import FormControl from './form/FormControl';
import TextInput from './form/TextInput';
import Textarea from './form/Textarea';
import Button from './buttons/Button';
import { FORM_BG_COLOR, FORM_LABEL_COLOR } from '../constants/theme';

const StyledFormMessage = styled.p`
  padding: 30px;
  background-color: ${FORM_BG_COLOR};
  color: ${FORM_LABEL_COLOR};
`;

export default function ContactForm({ children }) {
  const [state, handleSubmit] = useForm("xjvjopby");
  if (state.succeeded) {
      return <StyledFormMessage>Thanks for your message. I'll get back to you soon!</StyledFormMessage>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      {children}
      <FormControl name="name" label="Name" required={true}>
        <TextInput type="text" placeholder="First and Last Name"/>
      </FormControl>
      <FormControl name="email" label="Email Address" required={true}>
        <TextInput type="email" placeholder="example@gmail.com"/>
      </FormControl>
      <FormControl name="message" label="Message" required={true}>
        <Textarea placeholder="Type your message here..."/>
      </FormControl>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <Button use="secondary" type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  );
}