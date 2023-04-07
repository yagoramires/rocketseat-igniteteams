import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import Groups from '@screens/Groups';
import Loading from '@components/Loading';
import NewGroup from '@screens/NewGroup';
import Players from '@screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {/* {fontsLoaded ? <Groups /> : <Loading />} */}
      {/* {fontsLoaded ? <NewGroup /> : <Loading />} */}
      {fontsLoaded ? <Players /> : <Loading />}
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
    </ThemeProvider>
  );
}
