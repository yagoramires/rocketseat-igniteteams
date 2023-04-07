
import {TouchableOpacityProps} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { Container, ButtonIconTypeStyleProps, Icon } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

const ButtonIcon = ({ icon, type = 'PRIMARY', ...rest }: Props) => {
  return (
    <Container {...rest} >
      <Icon name={icon} type={type}/>
    </Container>
  );
};

export default ButtonIcon;
