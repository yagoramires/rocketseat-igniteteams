import { useState } from 'react';
import { Alert } from 'react-native';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import Input from '@components/Input';

import { useNavigation } from '@react-navigation/native';

import { Container, Content, ThreeIcon } from './styles';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';

const NewGroup = () => {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (!group) return;

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (e) {
      if(e instanceof AppError) {
        Alert.alert('Novo Grupo', e.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possivel criar um novo grupo.')
        console.log(e);
      }
    }
  };

  return (
    <Container>
      <Header showBackBtn />

      <Content>
        <ThreeIcon />
        <Highlight
          title='Nova turma'
          subtitle='Crie a turma para adicionar as pessoas'
        />
        <Input placeholder='Nome da turma' onChangeText={setGroup} />
        <Button title='Criar' onPress={handleNewGroup} />
      </Content>
    </Container>
  );
};

export default NewGroup;
