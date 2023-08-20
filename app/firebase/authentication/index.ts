import { getAuth } from "firebase/auth";
import { app } from "..";

export const auth = getAuth(app);

export * from "./loginWithEmail";
export * from "./loginWithGoogle";
export * from "./signUpWithEmail";
export * from "./logout";
