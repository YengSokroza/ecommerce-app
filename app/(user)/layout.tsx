import "@/styles/globals.css";
import { Metadata } from "next";

import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";

import { Link } from "@nextui-org/link";
import clsx from "clsx";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Error from "./error";
import Loading from "./loading";


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
