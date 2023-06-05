"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ITab } from "../../../src/interfaces";

interface IHeaderProps {
  tabs: ITab[];
}

export default function Header(props: IHeaderProps): JSX.Element {
  const pathname = usePathname();

  const displayHeader = pathname === "/" || props.tabs.find((tab) => tab.href === pathname)?.loggedIn;

  if (!displayHeader) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-2 p-2 border border-neutral-400 bg-blue-200">
      {props.tabs.map((tab) => (
        <Link key={`${tab.name}-${tab.href}`} href={tab.href} className="underline text-blue-400">
          {`->`} {tab.name}
        </Link>
      ))}
    </div>
  );
}
