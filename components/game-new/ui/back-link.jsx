import Link from "next/link";
import { LeftArrowIcon } from "./icons/left-arrow-icon";

export function BackLink() {
  return (
    <Link href="#" className="flex items-center gap-2 text-xs text-teal-600">
      <LeftArrowIcon />
      На Главную
    </Link>
  );
}
