import "@/styles/globals.css";
import { Metadata } from "next";

import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";


import clsx from "clsx";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Error from "./error";
import Loading from "./loading";

export const metadata : Metadata = {
	title: "STAD & CO",
	description: "STAD & CO is a vibrant online marketplace where you can discover and shop for a wide range of everyday essentials. From trendy clothing and fashion accessories to must-have lifestyle products, we've got you covered. Explore our curated selection and experience seamless online shopping at STAD & CO.",
	keywords: "clothes, fashion, accessories, online shopping",
	openGraph:{
		title: "STAD & CO",
		description: "STAD & CO is a vibrant online marketplace where you can discover and shop for a wide range of everyday essentials. From trendy clothing and fashion accessories to must-have lifestyle products, we've got you covered. Explore our curated selection and experience seamless online shopping at STAD & CO.",
		images: 'https://store.istad.co/media/icon_images/home_banner.png'
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"light bg-yellow-100 min-h-screen  font-sans antialiased relative flex flex-col ",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class" }}>
					<header>
						<NavbarComponent />
					</header>
					<main className="container min-h-screen mx-auto max-w-7xl pt-16 px-6 flex-grow ">
						<ErrorBoundary errorComponent={Error}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</ErrorBoundary>
					</main>
					<FooterComponent />
				</Providers>
			</body>
		</html>
	);
}
