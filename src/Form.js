import React from 'react';
import {H1, Button, Span, Form, Input} from './style';

export default function FormComp() {
  return (
    <>
      <Form>
        <Input placeholder="Search" />
        <Button>
          <Span>Search</Span>
        </Button>
      </Form>
    </>
  );
}
