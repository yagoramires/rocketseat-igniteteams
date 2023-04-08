import { Container, UsersIcon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native/types';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type CardProps = TouchableOpacityProps & {
  title: string;
};

const GroupCard = ({ title, ...touchableOpacityPropsRest }: CardProps) => {
  const navigation = useNavigation();

  const handleViewGroup = (group: string) => {
    navigation.navigate('players', { group });
  };
  return (
    <Container
      {...touchableOpacityPropsRest}
      onPress={() => handleViewGroup(title)}
    >
      <UsersIcon />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
