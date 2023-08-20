import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  inMemoryPersistence,
  setPersistence,
  updateProfile,
} from "firebase/auth";

import { auth } from ".";

export const signUpWithEmail = async (
  name: string,
  email: string,
  password: string
) => {
  await setPersistence(auth, inMemoryPersistence);
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(credentials.user, { displayName: name });

  return credentials;
};
