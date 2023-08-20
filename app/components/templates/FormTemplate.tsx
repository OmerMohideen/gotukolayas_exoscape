import { FormEvent, FormEventHandler, MouseEventHandler, ReactNode, useContext, useState } from "react"
import InputField, { typeInput } from "../organism/InputField"
import IconButton from "../atoms/buttons/IconButton"
import ShowIcon from "../atoms/icons/ShowIcon"
import HideIcon from "../atoms/icons/HideIcon"
import Button, { typeButton } from "../molecules/Button"
import Text, { typeText } from "../molecules/Text"
import GoogleIcon from "../atoms/icons/GoogleIcon"
import SmallLogoIcon from "../atoms/icons/SmallLogoIcon"
import { AuthContext } from "@/app/contexts"
import { loginWithGoogle } from "@/app/firebase/authentication"

interface FormProps {
	children: ReactNode,
	onSubmit: FormEventHandler<HTMLFormElement>
}

export function FormInputField({ ...props }: typeInput) {
	return (
		<InputField {...props} />
	)
}

export function FormPasswordInputField({ ...props }: typeInput) {
	const [show, setShow] = useState('password')
	function handleClick(event: FormEvent<HTMLButtonElement>) {
		event.preventDefault()
		event.stopPropagation()
		setShow(show === 'text' ? 'password' : 'text')
	}
	let icon = (<ShowIcon />)
	if (show === 'text') icon = (<ShowIcon />)
	else icon = (<HideIcon />)
	return (
		<InputField {...props} type={show} icon={<IconButton className="text-black" type="button" roundedSize="none" onClick={handleClick} icon={icon} />} />
	)
}

export function FormSubmitButton({ ...props }: typeButton) {
	return (
		<div className="w-full max-w-sm font-medium text-[16px]">
			<Button type="submit" {...props} />
		</div>
	)
}

export function FormGoogleButton({ login = false, onDone }: { login?: boolean, onDone: () => void }) {
	const { setUser } = useContext(AuthContext);

	// Add register login through google logic
	function handleClick() {
		loginWithGoogle().then((result) => {
			setUser?.({ user: result.user, isNewUser: !login });
			onDone();
		});
	}

	return (
		<div className="w-full max-w-sm">
			<Button className="border-[1px] border-black w-full h-[52px] font-medium text-[16px] text-black" type="button" label="Sign up with Google" position="left" icon={<GoogleIcon />} onClick={handleClick} />
		</div>
	)
}

export function FormSeperateText({ ...props }: typeText) {
	return (
		<div className="inline-flex items-center justify-center w-full">
			<hr className="w-full max-w-sm h-px my-8 bg-black border-0" />
			<Text className="absolute px-1 font-medium text-[16px] bg-white text-black" {...props} />
		</div>
	)
}

export function FormHeader({ ...props }: typeText) {
	return (
		<div className="inline-flex w-full max-w-sm items-center justify-between">
			<Text {...props} />
			<SmallLogoIcon />
		</div>
	)
}

interface FooterProps {
	text: string,
	buttonText: string,
	onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function FormFooter({ text, buttonText, onClick }: FooterProps) {
	return (
		<div className="flex items-center gap-1 text-[16px] font-medium">
			<Text label={text} />
			<a onClick={onClick} className="underline underline-offset-2 cursor-pointer">{buttonText}</a>
		</div>
	)
}

export default function FormTemplate({ children, onSubmit }: FormProps) {
	return (
		<form className="h-screen w-full flex flex-col items-center mt-10 gap-4" onSubmit={onSubmit}>
			{children}
		</form>
	)
}
