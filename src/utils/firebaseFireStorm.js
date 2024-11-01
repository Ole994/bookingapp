import { getFirestore } from 'firebase/firestore';
import { logError } from './firebaseConfig';

let firestore;

try {
  firestore = getFirestore();
} catch (error) {
  logError('Firestore', error);
}

export { firestore };
