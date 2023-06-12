"use client";

import { useRecoilValue } from "recoil";
import { isLoggedIn } from "../../recoil/SetupRecoil";
import { notFound, usePathname } from "next/navigation";
import { ITab } from "../../interfaces";

export interface ISessionProps {
  tabs: ITab[];
  children: React.ReactNode;
}

export default function Session(props: ISessionProps): JSX.Element {
  const isConnected = useRecoilValue(isLoggedIn);

  const pathname = usePathname();
  const loggedPath = props.tabs.find((tab) => tab.href === pathname)?.loggedIn;

  console.log("pathname", pathname);

  if (isConnected && loggedPath) {
    return <>props.children</>;
  }
  return notFound();
}
