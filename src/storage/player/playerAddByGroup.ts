import AsyncStorage from '@react-native-async-storage/async-storage';
import AppRoutes from 'src/routes/app.routes';
import { PLAYER_COLLECTION } from '../storageConfig';

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';
import { AppError } from '@utils/AppError';

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const storedPlayers = await playersGetByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(player => player.name.toLowerCase() === newPlayer.name.toLowerCase())

    if (playerAlreadyExists.length > 0) {
        throw new AppError('Essa pessoa já está adicionada em um time.')
    }

    const data = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, data )

  } catch (e) {
    throw e;
  }
};
