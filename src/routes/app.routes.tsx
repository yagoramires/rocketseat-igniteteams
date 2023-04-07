import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from '@screens/Groups';
import NewGroup from '@screens/NewGroup';
import Players from '@screens/Players';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName='groups'>
      <Screen name='groups' component={Groups} />
      <Screen name='new' component={NewGroup} />
      <Screen name='players' component={Players} />
    </Navigator>
  );
};


export default AppRoutes