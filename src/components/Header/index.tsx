import { Container, Logo, BackBtn, BackIcon } from './styles';

import { useNavigation } from "@react-navigation/native"

import LogoImg from '@assets/logo.png';

type HeaderProps = {
  showBackBtn?: boolean;
};

const Header = ({ showBackBtn = false }: HeaderProps) => {

  const navigation = useNavigation()

  const handleGoBack = ()=>{
    // navigation.goBack()
    navigation.navigate('groups')
  }


  return (
    <Container>
      {showBackBtn && (
        <BackBtn onPress={handleGoBack}>
          <BackIcon />
        </BackBtn>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
};

export default Header;
