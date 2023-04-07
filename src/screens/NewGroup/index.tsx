import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';

import { Container, Content, ThreeIcon } from './styles';
import Input from '@components/Input';

const NewGroup = () => {
  return (
    <Container>
      <Header showBackBtn />

      <Content>
        <ThreeIcon />
        <Highlight
          title='Nova turma'
          subtitle='Crie a turma para adicionar as pessoas'
        />
        <Input placeholder='Nome da turma'/>
        <Button title='Criar' />
      </Content>
    </Container>
  );
};

export default NewGroup;
