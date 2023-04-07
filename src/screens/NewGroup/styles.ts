import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  gap: 16px;
`;

export const ThreeIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GRAY_700,
}))`
  align-self: center;
`;
