import {
    CodeBracketSquareIcon,
    HomeIcon,
    DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./SideBar";

export const defaultNavItems: NavItem[] = [
    {
        label: "Dashboard",
        href: "/",
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        label: "Read Me",
        href: "/about",
        icon: <DocumentCheckIcon className="w-6 h-6" />,
    },
    {
        label: "Libraries",
        href: "/libraries",
        icon: <CodeBracketSquareIcon className="w-6 h-6" />,
    },
];
