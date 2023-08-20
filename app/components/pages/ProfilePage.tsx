import React from "react";
import VerticalTab from "../organism/VerticalTab";
import Text from "../molecules/Text";
import BackButton from "../molecules/BackButton";
import { STATES } from "@/app/types";
import { pageProps } from "@/app/page";
import SettingIcon from "../atoms/icons/SettingIcon";
import ArrowRightIcon from "../atoms/icons/ArrowRightIcon";
import Image from "next/image";
import Button from "../molecules/Button";
import LogoutIcon from "../atoms/icons/LogoutIcon";
import ProfileIcon from "../atoms/icons/ProfileIcon";
import LockIcon from "../atoms/icons/LockIcon";
import ImageIcon from "../atoms/icons/ImageIcon";
import InfoSquareIcon from "../atoms/icons/InfoSquareIcon";

function ProfilePage({ setPage }: pageProps) {
  return (
    <div className="w-full sm:max-w-sm mx-auto">
      <div className="mx-[20px] h-screen py-[20px]">
        <BackButton
          label="Profile"
          showLabel
          onClick={() => {
            setPage(STATES.DASHBOARD);
          }}
        />
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/images/default_user_profile_picture.jpg"}
              alt="Profile picture"
              width={122}
              height={122}
			  className="rounded-3xl"
			  loading="lazy"
            />
            <Text className="font-medium text-[24px]" label="Anatoly" />
          </div>
          <div className="flex flex-col gap-2">
            <Text className="text-[16px] font-medium" label="Settings" />
            <VerticalTab
              className="border-[1px] border-black w-full rounded-lg text-gray-600"
              label="App Settings"
              icon={<SettingIcon />}
              trailIcon={<ArrowRightIcon />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Text className="text-[16px] font-medium" label="Account" />
            <VerticalTab
              className="border-[1px] border-black w-full rounded-lg text-gray-600"
              label="Change account name"
              icon={<ProfileIcon />}
              trailIcon={<ArrowRightIcon />}
            />
            <VerticalTab
              className="border-[1px] border-black w-full rounded-lg text-gray-600"
              label="Change account password"
              icon={<LockIcon />}
              trailIcon={<ArrowRightIcon />}
            />
            <VerticalTab
              className="border-[1px] border-black w-full rounded-lg text-gray-600"
              label="Change account image"
              icon={<ImageIcon />}
              trailIcon={<ArrowRightIcon />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Text className="text-[16px] font-medium" label="Support" />
            <VerticalTab
              className="border-[1px] border-black w-full rounded-lg text-gray-600"
              label="FAQ"
              icon={<InfoSquareIcon />}
              trailIcon={<ArrowRightIcon />}
            />
          </div>
          <div className="mr-auto">
            <Button
              className="px-0 text-red-400"
              label="Logout"
              position="left"
              icon={<LogoutIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
