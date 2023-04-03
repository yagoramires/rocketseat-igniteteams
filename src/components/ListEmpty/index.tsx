import { Container, Message } from './styles';
import React from 'react';

type Props = {
  message: string;
};

const ListEmpty = ({ message }: Props) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default ListEmpty;
