import BackButton from "../molecules/BackButton"
import { pageProps } from "@/app/page"
import { STATES } from "@/app/types"
import FormTemplate, { FormInputField, FormSubmitButton } from "../templates/FormTemplate"
import Text from "../molecules/Text"
import Image from "next/image"

export default function PaymentPage({setPage}: pageProps) {
	function handleSubmit(e: any) {
		e.preventDefault()
		if (e.target[0].value === "8888")setPage(STATES.PASS)
		else alert("Inavlid Wallet")
	}
  return (
    <div className="flex flex-col h-screen py-[20px] mx-[20px]">
      <BackButton
        label="Payment"
        onClick={() => {
          setPage(STATES.AVAILABLE);
        }}
      />
	  <FormTemplate onSubmit={handleSubmit}>
		  <Image src={"/images/coin_image.png"} alt="coin image" loading="lazy" width={300} height={448}/>
		<FormInputField
          className="border-[1px] border-black rounded-md"
          required
          label={
            <Text
              label="Wallet Address"
              className="font-medium text-black text-[22px]"
            />
          }
        /> 
        <FormSubmitButton
          className="bg-primary text-black w-full h-[52px] my-10"
          label="Pay"
        />
      </FormTemplate>
  </div>
  )
}
