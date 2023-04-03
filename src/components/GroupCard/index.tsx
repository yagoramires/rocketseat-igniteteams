import { Container, UsersIcon, Title } from './style';
import { TouchableOpacityProps } from 'react-native/types';
import React from 'react';

type CardProps = TouchableOpacityProps & {
  title: string;
};

const GroupCard = ({ title, ...touchableOpacityPropsRest }: CardProps) => {
  return (
    <Container {...touchableOpacityPropsRest}>
      <UsersIcon weight='fill' />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
