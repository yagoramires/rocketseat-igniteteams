import { TextInputProps, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

const Input = ({ inputRef, ...rest }: Props) => {
  const { COLORS } = useTheme();

  return (
    <Container
      {...rest}
      placeholderTextColor={COLORS.GRAY_300}
      ref={inputRef}
    />
  );
};

export default Input;
