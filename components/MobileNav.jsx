"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

const links = [
    { name: 'home', path: '/' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
]

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {/* Added fixed positioning, high z-index, and placement 
               to keep the hamburger visible during scroll.
            */}
            <SheetTrigger className="fixed top-8 right-8 z-50 flex justify-center items-center p-2 bg-primary/80 backdrop-blur-sm rounded-md border border-white/10">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            
            <SheetContent className="flex flex-col p-4">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <h1 className='text-4xl font-semibold'>
                            jesh<span className="text-accent">.</span>rc
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                onClick={() => setOpen(false)}
                                className={`${
                                    link.path === pathname &&
                                    "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;