import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import Routes from './src/routes';

import Loading from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
