import {
  GoogleAuthProvider,
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";

import { auth } from ".";

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

export const loginWithGoogle = async () => {
  await setPersistence(auth, inMemoryPersistence);
  return await signInWithPopup(auth, googleAuthProvider);
};
