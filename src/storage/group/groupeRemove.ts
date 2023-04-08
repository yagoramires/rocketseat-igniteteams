import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '../storageConfig';
import { groupsGetAll } from './groupsGetAll';
import { AppError } from '@utils/AppError';

export const groupRemove = async (groupName: string) => {
  try {
    const storedGroups = await groupsGetAll()
    
    const removeGroup = storedGroups.filter(group => group !== groupName)
    
    const groupData = JSON.stringify(removeGroup)

    await AsyncStorage.setItem(GROUP_COLLECTION, groupData);
  } catch (e) {
    throw e;
  }
};
