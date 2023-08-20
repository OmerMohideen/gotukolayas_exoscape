import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from ".";

export const loginWithEmail = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
