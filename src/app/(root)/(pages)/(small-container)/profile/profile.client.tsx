"use client";

import Empty from "../../_components/ui/Empty";
import { Bell, UserRound } from "lucide-react";

type ProfileUser = {
  id: string;
  identifier: string;
  name: string;
  role: string;
};

type ProfileClientProps = {
  user: ProfileUser | null;
};


export default function ProfileClient({ user }: Readonly<ProfileClientProps>) {

  if (!user) {
    return (
      <div className="flex min-h-[calc(100dvh-12rem)] w-full items-center justify-center">
        <Empty />
      </div>
    );
  }

  
  return (
    <>
      {/* <div className="w-full">
        <div className="flex items-center justify-between w-[100px] h-[100px] bg-gray-800"><UserRound/></div>
      </div> */}
    </>
  );
}
