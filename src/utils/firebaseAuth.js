import { getAuth } from 'firebase/auth';
import { logError } from './firebaseConfig';

let auth;

try {
  auth = getAuth();
} catch (error) {
  logError('Authentication', error);
}

export { auth };
