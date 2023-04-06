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
        <Input />
        <Button title='Criar' />
      </Content>
    </Container>
  );
};

export default NewGroup;
