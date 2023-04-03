import { Container, Logo, BackBtn, BackIcon } from './styles';

import LogoImg from '@assets/logo.png';

type HeaderProps = {
  showBackBtn?: boolean;
};

const Header = ({ showBackBtn = false }: HeaderProps) => {
  return (
    <Container>
      {showBackBtn && (
        <BackBtn>
          <BackIcon />
        </BackBtn>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
};

export default Header;
