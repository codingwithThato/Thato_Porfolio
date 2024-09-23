// import React from 'react'
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
    {
        name: "home", 
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "portfolio",
        path: "/portfolio",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {links.map(( link , index ) => {
                return (
                    <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                        {/* <a className="text-black hover:text-accent"> */}
                            {link.name}
                        {/* </a> */}
                    </Link>
                )
            })}
        </nav>
    );
};

export default Nav