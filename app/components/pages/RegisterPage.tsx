import { FormEvent } from "react";
import Checkbox from "../molecules/Checkbox";
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

export default function RegisterPage({setPage}: pageProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex flex-col h-screen py-[20px] mx-[20px]">
	  <BackButton label="Register" onClick={() => {setPage(STATES.LOGIN)}}/>
      <FormTemplate onSubmit={handleSubmit}>
        <FormHeader
          label="Create Account"
          className="font-medium text-[32px] w-20 leading-9"
        />
        <FormInputField
          className="border-[1px] border-black rounded-md"
          required
          label={<Text label="Full name" className="font-medium text-[22px]" />}
        />
        <FormInputField
          className="border-[1px] border-black rounded-md"
          required
          label={
            <Text label="Your Email" className="font-medium text-[22px]" />
          }
        />
        <FormPasswordInputField
          className="border-[1px] border-black rounded-lg"
          required
          label={<Text label="Password" className="font-medium text-[22px]" />}
	  />
	  <div className="w-full max-w-sm mt-2 mb-4">
        <Checkbox
          className="accent-black"
          required
          label={
            <Text
              className="font-regular text-[12px] mt-1"
              label="I agree to the Terms & Conditions and Privacy Policy"
            />
          }
	  />
  </div>
        <FormSubmitButton
          className="bg-primary text-black w-full h-[52px]"
          label="Create account"
        />
        <FormSeperateText label="or" />
        <FormGoogleButton />
        <FormFooter
          text="Already have an account?"
          buttonText="Login"
          onClick={() => {
			  setPage(STATES.LOGIN)
          }}
        />
      </FormTemplate>
    </div>
  );
}
