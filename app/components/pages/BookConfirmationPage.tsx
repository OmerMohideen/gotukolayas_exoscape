import { pageProps } from "@/app/page";
import { STATES } from "@/app/types";
import BackButton from "../molecules/BackButton";
import FormTemplate, {
  FormInputField,
  FormSubmitButton,
} from "../templates/FormTemplate";
import Text from "../molecules/Text";
import Button from "../molecules/Button";

interface bookConfirmProps extends pageProps {
	available: Array<any>
}

export default function BookConfirmationPage({ available, setPage }: bookConfirmProps) {
	function handleSubmit() {
		setPage(STATES.PAYMENT)
	}
  return (
    <div className="flex flex-col h-screen py-[20px] mx-[20px]">
      <BackButton
        label="Book Confirmation"
        onClick={() => {
          setPage(STATES.AVAILABLE);
        }}
      />
	  <FormTemplate onSubmit={handleSubmit}>
		  <div className="flex gap-4 w-full sm:max-w-sm justify-between font-medium text-[16px] mb-10">
			  <Button label="One way" type="button" className="w-full bg-primary text-black"/>
			 <Button label="Round Trip" type="button" className="w-full bg-primary_subtle text-black"/>
		  </div>
        <FormInputField
          className="border-[1px] border-black rounded-md"
          required
		  disabled
		  value={available[0].name}
          label={
            <Text
              label="from"
              className="uppercase font-medium text-gray-500 text-[14px]"
            />
          }
        />
        <FormInputField
          className="border-[1px] border-black rounded-md"
		  required
		  		  value={available[1].name}
          disabled
          label={
            <Text
              label="to"
              className="uppercase font-medium text-gray-500 text-[14px]"
            />
          }
        />{" "}
        <FormInputField
          className="border-[1px] border-black rounded-md"
		  required
		  value={available[2].toLocaleDateString('en-US', {
			year: 'numeric',
			  month: 'short',
  day: 'numeric',
})}
          disabled
          label={
            <Text
              label="date"
              className="uppercase font-medium text-gray-500 text-[14px]"
            />
          }
        />{" "}
        <FormInputField
          className="border-[1px] border-black rounded-md"
          required
		  disabled
		  value={available[2].toLocaleTimeString('en-US', {
			  hour: 'numeric',
			  minute: 'numeric',
			  hour12: true
			})}

          label={
            <Text
              label="departure time"
              className="uppercase font-medium text-gray-500 text-[14px]"
            />
          }
        />
        <FormSubmitButton
          className="bg-primary text-black w-full h-[52px] my-10"
          label="Continue"
        />
      </FormTemplate>
    </div>
  );
}
