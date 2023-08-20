'use client'

import { FormEvent, useContext, useState } from "react";
import Text from "../molecules/Text";
import FormTemplate, {
  FormFooter,
  FormGoogleButton,
  FormHeader,
  FormInputField,
  FormPasswordInputField,
  FormSeperateText,
  FormSubmitButton,
} from "../templates/FormTemplate";
import BackButton from "../molecules/BackButton";
import { pageProps } from "@/app/page";
import { STATES } from "@/app/types";
import { loginWithEmail } from "@/app/firebase/authentication";
import { AuthContext } from "@/app/contexts";
import { error } from "console";

export default function LoginPage({ setPage }: pageProps) {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (ev: FormEvent<HTMLInputElement>) => setPassword(ev.currentTarget.value);
  const handleEmailChange = (ev: FormEvent<HTMLInputElement>) => setEmail(ev.currentTarget.value);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginWithEmail(email, password).then((userCredentials) => {
      setUser?.({ user: userCredentials.user, isNewUser: false });
      setPage(STATES.LOAD);
    }).catch((e) => {
      alert(`Authentication Error: ${e.code}`);
    });
  }

  return (
    <div className="flex flex-col h-screen py-[20px] mx-[20px]">
      <BackButton label="Login" onClick={() => { setPage(STATES.REGISTER) }} />
      <FormTemplate onSubmit={handleSubmit}>
        <FormHeader
          label="Welcome Back!"
          className="font-medium text-[32px] w-20 leading-9"
        />
        <FormInputField
          className="border-[1px] border-black rounded-md"
          required
          label={<Text label="Email" className="font-medium text-[22px]" />}
          value={email}
          onChange={handleEmailChange}
        />
        <FormPasswordInputField
          className="border-[1px] border-black rounded-lg"
          required
          label={<Text label="Password" className="font-medium text-[22px]" />}
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="flex w-full max-w-sm justify-end">
          <Text className="text-black text-[18px] font-medium text-left" label="Forgot Password?" />
        </div>
        <FormSubmitButton
          className="bg-primary text-black w-full h-[52px]"
          label="Login"
        />
        <FormSeperateText label="or" />
        <FormGoogleButton login onDone={() => setPage(STATES.LOAD)} />
        <FormFooter
          text="Don't have an account?"
          buttonText="Sign up"
          onClick={() => {
            setPage(STATES.REGISTER)
          }}
        />
      </FormTemplate>
    </div>
  );
}
