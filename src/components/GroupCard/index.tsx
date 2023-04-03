import { Container, UsersIcon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native/types';
import React from 'react';

type CardProps = TouchableOpacityProps & {
  title: string;
};

const GroupCard = ({ title, ...touchableOpacityPropsRest }: CardProps) => {
  return (
    <Container {...touchableOpacityPropsRest}>
      <UsersIcon />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
