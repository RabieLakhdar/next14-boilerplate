import React, { useRef } from "react"
import classNames from "classnames"
import Link from "next/link"
import Image from "next/image"
import {
    ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import { defaultNavItems } from "./defaultNavItems"

// define a NavItem prop
export type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

// add NavItem prop to component prop
type Props = {
    open: boolean;
    navItems?: NavItem[];
    setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {

    return (
        <div
            className={classNames({
                "flex flex-col justify-between": true,
                "bg-sky-500 text-zinc-50": true,
                "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true,
                "h-dvh": true,
                "transition-transform .3s ease-in-out md:-translate-x-0": true,
                "-translate-x-full ": !open, //hide sidebar to the left when closed
            })}
        >

            <nav className="md:sticky top-0 md:top-16">
                {/* nav items */}
                <ul className="py-2 flex flex-col gap-2">
                    {navItems.map((item, index) => {
                        return (
                            <Link key={index} href={item.href}>
                                <li
                                    className={classNames({
                                        "text-indigo-100 hover:bg-sky-900": true,
                                        "flex gap-4 items-center ": true,
                                        "transition-colors duration-300": true,
                                        "rounded-md p-2 mx-2": true,
                                    })}
                                >
                                    {item.icon} {item.label}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
            <div className="border-t border-t-white-800 p-4">
                <div className="flex gap-4 items-center cursor-pointer">
                    <ArrowRightStartOnRectangleIcon
                        className="w-6 h-6"
                    />
                    <div className="flex flex-col ">
                        <span className="text-indigo-50 my-0">Logout</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;