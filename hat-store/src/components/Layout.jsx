import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
 return (
     <div>
        <header className="bg-green-600">
            <nav className="flex justify-between items-center  w-[80%] mx-auto py-4">
                <img src="../logo.svg" alt="logo" className="w-40"/>
                <ul className="flex item-center text-white  text-lg font-semibold">
                    <li className="px-4 hover:text-orange-950 "><Link to="/">Home</Link></li>
                    <li className="px-4 hover:text-orange-950"><Link to="/about">About</Link></li>
                    <li className="px-4 hover:text-orange-950"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
       </header>
       <main>
        <Outlet />
       </main>
    </div>
    )
}

export default Layout;