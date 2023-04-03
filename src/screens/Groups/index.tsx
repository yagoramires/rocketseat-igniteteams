import { useState } from 'react';

import { FlatList } from 'react-native';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListEmpty';

import { Container } from './styles';

// interface IGroups {
//   id: string;
//   name: string;
//   members: Array<string>;
// }

const Groups = () => {
  const [groups, setGroups] = useState<Array<string>>([
    // 'Turma do bairro',
    // 'Tropa dos DEV',
    // 'Turma do pa god',
  ]);

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
          <ListEmpty message='Que tal cadastrar a primeira turma?' />
        }
      />
    </Container>
  );
};

export default Groups;
