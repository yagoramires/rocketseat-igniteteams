import { useState, useRef } from 'react';
import { Alert, TextInput } from 'react-native';

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
  
  const newGroupInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) return Alert.alert('Novo Grupo', 'Informe o nome da turma.');

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
        <Input placeholder='Nome da turma' onChangeText={setGroup}
                  inputRef={newGroupInputRef}
                  onSubmitEditing={handleNewGroup}
                  returnKeyType='done'
        />
        <Button title='Criar' onPress={handleNewGroup} />
      </Content>
    </Container>
  );
};

export default NewGroup;
