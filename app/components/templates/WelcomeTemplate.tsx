"use client";
import Image, { ImageProps } from "next/image";
import { MouseEventHandler, ReactNode } from "react";
import Text from "../molecules/Text";
import Button, { typeButton } from "../molecules/Button";
import DotSelection from "../organism/DotSelection";

interface WelcomeProps {
  children: ReactNode;
  onSkip: MouseEventHandler<HTMLButtonElement>;
}

interface WelcomeButton extends typeButton {
  page: number;
}

interface WelcomeText {
  title: string;
  description: string;
  longText?: boolean;
}

export function WelcomeImage({ ...props }: ImageProps) {
  return (
    <div className="inline-flex justify-center mt-[54px]">
      {/* eslint-disable-next-line */}
      <Image
        className="w-[351px] h-[351px] rounded-2xl"
        priority={true}
        loading="eager"
        width={1080}
        height={1080}
        {...props}
      />
    </div>
  );
}

export function WelcomeText({
  title,
  description,
  longText = false,
}: WelcomeText) {
  let textSize = "leading-[3rem] text-[48px]";
  if (longText) textSize = "leading-10 text-[40px]";
  return (
    <div className="mt-[43px] space-y-[13px]">
      <Text
        className={`font-semibold tracking-tight ${textSize}`}
        label={title}
      />
      <Text className="font-medium text-[20px]" label={description} />
    </div>
  );
}

export function WelcomeButton({ page, ...props }: WelcomeButton) {
  return (
    <div className="inline-flex items-center justify-between mt-auto">
      <DotSelection
        className="bg-primary_subtle checked:bg-primary"
        clicked={`${page}`}
      />
      <Button
        className="bg-primary text-black font-medium text-[24px] px-8"
        {...props}
      />
    </div>
  );
}

export default function WelcomeTemplate({ children, onSkip }: WelcomeProps) {
  return (
    <div className="flex flex-col h-screen py-[20px] mx-[20px]">
      <div className="flex justify-end">
        <Button
          className="text-gray-600 font-medium text-[20px]"
          label="Skip"
          onClick={onSkip}
        />
      </div>
      {children}
    </div>
  );
}
