import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '../storageConfig';
import { groupsGetAll } from './groupsGetAll';

export const groupCreate = async (newGroupName: string) => {
  try {
    const storedGroups = await groupsGetAll()

    const groupData = JSON.stringify([...storedGroups, newGroupName])

    await AsyncStorage.setItem(GROUP_COLLECTION, groupData);
  } catch (e) {
    throw e;
  }
};
