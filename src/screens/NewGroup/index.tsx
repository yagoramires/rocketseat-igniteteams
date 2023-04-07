import {useState} from 'react';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import Input from '@components/Input';

import { useNavigation } from '@react-navigation/native';

import { Container, Content, ThreeIcon } from './styles';

const NewGroup = () => {
  const [group, setGroup] = useState('')

  const navigation = useNavigation();

  const handleNewGroup = () => {
    if (!group) return
    
    navigation.navigate('players', {group});
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
        <Input placeholder='Nome da turma' onChangeText={setGroup}/>
        <Button title='Criar' onPress={handleNewGroup} />
      </Content>
    </Container>
  );
};

export default NewGroup;
