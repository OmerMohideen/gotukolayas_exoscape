import { auth } from ".";

export const logout = async () => {
  return auth.signOut();
};
