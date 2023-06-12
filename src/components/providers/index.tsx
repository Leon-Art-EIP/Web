"use client";

import { RecoilRoot, useRecoilValue } from "recoil";
import Session, { ISessionProps } from "../session";

export default function Providers(props: ISessionProps): JSX.Element {
  return (
    <RecoilRoot>
      <Session tabs={props.tabs}>{props.children}</Session>
    </RecoilRoot>
  );
}
