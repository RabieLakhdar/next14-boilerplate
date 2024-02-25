import React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import classNames from "classnames"
type Props = {
    menuButton(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-sky-500 text-zinc-50": true,
        "flex items-center": true,
        "w-full fixed z-10 px-8 shadow-sm h-16": true,
      })}
    >
      <div className="font-bold text-lg">NextJs14 Boilerplate</div>
      <div className="flex-grow"></div> {/** spacer */}
      <button className="md:hidden" onClick={props.menuButton}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
export default Navbar;

