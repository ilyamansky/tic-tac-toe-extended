import logo from "./logo.svg";
import Image from "next/image";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex items-center bg-white h-24 px-8 shadow-lg">
      <Image src={logo} alt="logo" />
      <div className="w-px bg-slate-400 mx-8 h-8"></div>
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="flex text-teal-600 hover:text-teal-500 transition-colors ml-auto gap-2 text-start">
        <Profile name="Alex" rating="1345" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
