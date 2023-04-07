import { useState } from 'react';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import Input from '@components/Input';

import { useNavigation } from '@react-navigation/native';

import { Container, Content, ThreeIcon } from './styles';
import { groupCreate } from '@storage/group/groupCreate';

const NewGroup = () => {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (!group) return;

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (e) {
      console.log(e);
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
