// import React from 'react'
import Link from "next/link";
import { Button } from './ui/button';

import Nav from './Nav';
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-black bg-pink-50/20">
        <div className="container mx-auto flex justify-between items-center">

            {/* logo --> remember to change this. */}
            <Link href='/'>
            <h1 className="text-4xl font-semibold">
                Thato <span className="text-accent">.</span>
            </h1>
            </Link>

            {/* desktop nav + contact me btn */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href={'/contact'}>
                    <Button>Contact me</Button>
                </Link>
            </div>

            {/* mobile navbar */}
            <div className="xl:hidden">
                mobile navbar
            </div>
        </div>
    </header>
  )
}

export default Header