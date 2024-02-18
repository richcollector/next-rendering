import { atom, RecoilEnv } from 'recoil';
import db from '../../utils/db/db.json';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const boardState = atom({
	key: 'boardState',
	default: [...db.board],
});
