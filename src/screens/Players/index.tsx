import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';

import { Container, Form } from './styles';
import Input from '@components/Input';

const Players = () => {
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
    </Container>
  );
};

export default Players;
