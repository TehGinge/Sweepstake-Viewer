import { initializeApp, getApp, getApps } from 'firebase/app';
import { Auth, browserLocalPersistence, getAuth, setPersistence, signInAnonymously, User } from 'firebase/auth';
import { Database, getDatabase } from 'firebase/database';

interface FirebaseServices {
  auth: Auth;
  database: Database;
}

const env = (import.meta as any).env ?? {};

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.VITE_FIREBASE_DATABASE_URL,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

const isConfigValuePresent = (value: unknown): boolean => {
  return typeof value === 'string' && value.trim().length > 0;
};

export const isFirebaseConfigured = (): boolean => {
  return Object.values(firebaseConfig).every(isConfigValuePresent);
};

let cachedServices: FirebaseServices | null = null;

export const getFirebaseServices = (): FirebaseServices | null => {
  if (!isFirebaseConfigured()) {
    return null;
  }

  if (cachedServices) {
    return cachedServices;
  }

  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  cachedServices = { auth, database };
  return cachedServices;
};

export const ensureAnonymousAuth = async (): Promise<User | null> => {
  const services = getFirebaseServices();
  if (!services) return null;

  const { auth } = services;

  if (auth.currentUser) {
    return auth.currentUser;
  }

  try {
    await setPersistence(auth, browserLocalPersistence);
    const credential = await signInAnonymously(auth);
    return credential.user;
  } catch (error: any) {
    const errorCode = error?.code;

    if (errorCode === 'auth/configuration-not-found' || errorCode === 'auth/operation-not-allowed') {
      throw new Error('Firebase Anonymous Authentication is not enabled. In Firebase Console, go to Authentication > Sign-in method and enable Anonymous.');
    }

    throw error;
  }
};
