'use client'

import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button"
import {Link} from "@nextui-org/link"
import logo from "@/public/yellow_logo.svg"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuList } from "./menu";

type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(MenuList);

 

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="z-50 fixed text-foreground bg-orange-100 border-0"
    >
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          
        <Image src={logo} width={50} height={50} alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarBrand>
          <Image src={logo} width={60} height={50} alt="logo" />
         
        </NavbarBrand>
        {menu.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              color={
                item.path == pathname ? "primary" :  "foreground"
              }
              href={item.path}
              size="md"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {/* {menu.map((item, index) => (
					<NavbarItem
						key={index}
						as={Link}
						href={item.path}
						isActive={item.path === pathname}
            
						className="text-dark-100 hover:text-red-60 font-semibold"
					>
						{item.name}
					</NavbarItem>
				))} */}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-yellow-100 font-semibold" href="/dashboard" variant="flat">
            Go to Dashboard
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menu.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              color={
                item.path === pathname ? "warning" :  "foreground"
              }
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
