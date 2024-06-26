import { Link } from '@nextui-org/link'
import React from 'react'
import logo from "@/public/yellow_logo.svg"
import Image from 'next/image'


export default function FooterComponent() {
    return (
        <footer className="w-full flex flex-col items-center justify-center py-3 bg-black-100  bottom-0">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title="Home"
            >
                <Image src={logo} width={100} height={50} alt="logo" />
            </Link>
            <div className='flex flex-wrap gap-4'>
                <Link className='text-white-100' href="/"
                    title="home">Home</Link>
                <Link className='text-white-100' href="/dashboard"
                    title="Dashboard">Go to Dashboard</Link>
                <Link className='text-white-100' href="/about"
                    title="About">About</Link>
                <Link className='text-white-100' href="/policies"
                    title="Policies">Policies</Link>
            </div>
            <br />
            <span className='text-center text-xs'>© 2023 <a href="/" className="hover:underline">STAD & CO™</a>. All Rights Reserved.</span>

        </footer>
    )
}
