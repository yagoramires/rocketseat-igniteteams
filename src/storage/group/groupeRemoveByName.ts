import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../storageConfig';
import { groupsGetAll } from './groupsGetAll';

export const groupeRemoveByName = async (groupName: string) => {
  try {
    const storedGroups = await groupsGetAll();
    const removeGroup = storedGroups.filter((group) => group !== groupName);
    const groupData = JSON.stringify(removeGroup);

    await AsyncStorage.setItem(GROUP_COLLECTION, groupData);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
  } catch (e) {
    throw e;
  }
};
