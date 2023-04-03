import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL + 'px'};
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
