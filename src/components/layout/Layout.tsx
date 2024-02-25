'use client'

import { useState } from "react"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">
            <Navbar menuButton={() => setShowSideBar(!showSideBar)} />
            <div className="grid md:grid-cols-sidebar">
                <SideBar open={showSideBar} setOpen={setShowSideBar} />
            </div>
            {children}
        </div>
    );
};

export default Layout;
