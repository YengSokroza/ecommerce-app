// "use client";

// import { Sidebar } from "flowbite-react";

// import Link from "next/link";
// import { MenuList } from "./menu";
// import React, { useState } from "react";

// type MenuItem = {
// 	name: string;
// 	path: string;
// 	icon: React.ElementType;
// };

// export default function SideBarComponent() {
// 	const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);
// 	return (
// 		<Sidebar aria-label="Default sidebar example ">
// 			<Sidebar.Items>
// 				<Sidebar.ItemGroup>
// 					{menuList.map((item, index) => (
// 						<Sidebar.Item
// 							key={index}
// 							as={Link}
// 							href={item.path}
// 							icon={item.icon}
// 						>
// 							{item.name}
// 						</Sidebar.Item>
// 					))}
// 				</Sidebar.ItemGroup>
// 			</Sidebar.Items>
// 		</Sidebar>
// 	);
// }



"use client";

import { Sidebar } from "flowbite-react";
import { useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { MenuList } from "./menu";
import Link from "next/link";
import Image from "next/image";


type MenuItem = {
	name: string;
	path: string;
	icon: React.ElementType;
};

export default function SideBarComponent() {
	const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);
  return (
    <Sidebar className="bg-black-100 " aria-label="Sidebar with logo branding example">
      

      <Sidebar.Items>
        <Sidebar.ItemGroup>
		<img src='https://store.istad.co/media/icon_images/blacklogo.png' className="mx-auto" width="100px"  alt="stad&co logo" ></img>
		{menuList.map((item, index) => (
						<Sidebar.Item
							key={index}
							as={Link}
							href={item.path}
							icon={item.icon}
						>
							{item.name}
						</Sidebar.Item>
					))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
