import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '../storageConfig';
import { groupsGetAll } from './groupsGetAll';
import { AppError } from '@utils/AppError';

export const groupCreate = async (newGroupName: string) => {
  try {
    const storedGroups = await groupsGetAll()

    const groupAlreadyExists = storedGroups.includes(newGroupName.toLowerCase())

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const groupData = JSON.stringify([...storedGroups, newGroupName.toLowerCase()])

    await AsyncStorage.setItem(GROUP_COLLECTION, groupData);
  } catch (e) {
    throw e;
  }
};
