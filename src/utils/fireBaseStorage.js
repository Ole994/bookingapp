import { getStorage } from 'firebase/storage';
import { logError } from './firebaseConfig';

let storage;

try {
  storage = getStorage();
} catch (error) {
  logError('Storage', error);
}

export { storage };
