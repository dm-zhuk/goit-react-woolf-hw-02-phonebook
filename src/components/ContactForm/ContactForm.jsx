import React, { useState } from 'react';
import { Form, Label, Input, SubmitButton } from './index';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name:</Label>
      <Input
        type="text"
        value={name}
        onChange={evt => setName(evt.target.value)}
        required
      />
      <Label>Number:</Label>
      <Input
        type="tel"
        value={number}
        onChange={evt => setNumber(evt.target.value)}
        required
      />
      <SubmitButton type="submit">Add Contact</SubmitButton>
    </Form>
  );
};

export default ContactForm;
