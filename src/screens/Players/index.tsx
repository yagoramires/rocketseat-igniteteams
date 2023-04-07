import { useState } from 'react';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import Input from '@components/Input';
import Filter from '@components/Filter';

import { FlatList } from 'react-native';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

const Players = () => {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Yago','Ed','João Sacana']);

  return (
    <Container>
      <Header showBackBtn />
      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />
      <Form>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
    </Container>
  );
};

export default Players;
