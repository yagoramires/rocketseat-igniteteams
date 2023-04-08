import { useState, useEffect, useRef } from 'react';
import { FlatList, Alert, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import Input from '@components/Input';
import Filter from '@components/Filter';
import PlayerCard from '@components/PlayerCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';
import Loading from '@components/Loading';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

import { groupeRemoveByName } from '@storage/group/groupeRemoveByName';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';

import { AppError } from '@utils/AppError';

type RouteParams = {
  group: string;
};

const Players = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<Array<PlayerStorageDTO>>([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleAddPlayer = async () => {
    try {
      if (newPlayerName.trim().length === 0) {
        return Alert.alert(
          'Nova pessoa',
          'Informe o nome da pessoa para adicionar.'
        );
      }

      const newPlayer = {
        name: newPlayerName,
        team
      };

      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam();

      newPlayerNameInputRef.current?.blur();
      setNewPlayerName('');
    } catch (e) {
      if (e instanceof AppError) {
        Alert.alert('Nova pessoa', e.message);
      } else {
        console.log(e);
        Alert.alert('Nova pessoa', 'Não foi possivel adicionar o jogador.');
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    setIsLoading(true)
    try {
      const players = await playerGetByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Pessoas',
        'Não foi possivel carregar as pessoas do time selecionado.'
        );
      } finally {
      setIsLoading(false)
    }
  };

  const handlePlayerRemove = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (e) {
      Alert.alert('Remover pessoa', 'Não foi possivel remover essa pessoa.');
    }
  };

  const groupRemove = async () => {
    try {
      await groupeRemoveByName(group);

      navigation.navigate('groups');
    } catch (e) {
      console.log(e);
      Alert.alert('Remover grupo', 'Não foi possivel remover o grupo.');
    }
  };

  const handleRemoveGroup = async () => {
    Alert.alert('Remover', 'Deseja Remover a turma?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => groupRemove() }
    ]);
  };

  console.log(players)

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackBtn />
      <Highlight title={group} subtitle='Adicione a galera e separe os times' />
      <Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />
        <ButtonIcon icon='add' onPress={handleAddPlayer} />
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

      {isLoading ? (
        <Loading/>
      ) : (

      <FlatList
        data={players}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
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
      )}


      <Button
        title='Remover turma'
        type='SECONDARY'
        onPress={handleRemoveGroup}
      />
    </Container>
  );
};

export default Players;
