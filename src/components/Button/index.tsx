import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonTypeStyleProps, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

const Button = ({ type = 'PRIMARY', title, ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
