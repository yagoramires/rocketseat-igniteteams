import { useState, useCallback } from 'react';

import { FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

import { Container } from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import Loading from '@components/Loading';

const Groups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<Array<string>>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('new');
  };

  const fetchGroups = async () => {
    setIsLoading(true)
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false)
    }
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', { group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title={'Turmas'} subtitle={'Jogue com a sua turma'} />

      {isLoading ? (
        <Loading/>
      ):(
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={
            <ListEmpty message={'Que tal cadastrar a primeira turma?'} />
          }
        />

      )}


      <Button title='Criar nova turma' onPress={handleNewGroup} />
    </Container>
  );
};

export default Groups;
