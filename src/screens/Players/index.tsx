import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import Input from '@components/Input';
import Filter from '@components/Filter';
import PlayerCard from '@components/PlayerCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

type RouteParams = {
  group: string;
};

const Players = () => {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([
    'Yago',
    'Ed',
    'João Sacana',
    'Yan',
    'Ferrato',
    'Felipe',
    'Gabriel',
    'Pablo'
  ]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackBtn />
      <Highlight title={group} subtitle='Adicione a galera e separe os times' />
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

      <FlatList
        data={players}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => console.log('Removeu ' + item)}
          />
        )}
        ListEmptyComponent={<ListEmpty message='Não há pessoas nesse time' />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && {
            flex: 1
          }
        ]}
      />

      <Button title='Remover turma' type='SECONDARY' />
    </Container>
  );
};

export default Players;
