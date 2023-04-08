import { useState, useEffect, useCallback } from 'react';

import { FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

import { Container } from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';

const Groups = () => {
  const [groups, setGroups] = useState<Array<string>>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('new');
  };

  const fetchGroups = async () => {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (e) {
      console.log(e);
    }
  };

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight title={'Turmas'} subtitle={'Jogue com a sua turma'} />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message={'Que tal cadastrar a primeira turma?'} />
        }
      />

      <Button title='Criar nova turma' onPress={handleNewGroup} />
    </Container>
  );
};

export default Groups;
