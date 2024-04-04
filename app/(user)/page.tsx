'use client'

import Image from "next/image";
import heroImg from "@/public/(home)/rush.svg"
import { Button } from "@nextui-org/button";
import GridCard from "@/components/card/GridCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardProductComponent from "@/components/card/CardProductComponent";
import Link from "next/link";
import { ProductType } from "@/libs/definition";




export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://store.istad.co/api/products/")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);
	return (
		<>
			<section className="grid place-items-center relative ">
				<div className="grid xl:grid-cols-2 grid-cols-1 place-items-center place-content-center">
					<div>
						<h1 className="text-black-100 xl:text-8xl text-4xl font-bold mb-4">It&apos;s shopping spree time!</h1>
						<p className="text-black-100 xl:text-3xl text-2xl font-semibold mb-6">You coming, or are you just gonna stare at those amazing deals?</p>
						<div>
							<Button className="bg-orange-100 text-white font-semibold text-base" href="/dashboard" >
								Let&apos;s browse now
							</Button>
						</div>
					</div>
					<Image src={heroImg} alt="rushing" width={500} />

				</div>

				<div className="absolute -bottom-8 bg-orange-100 p-4 rounded-full">
					<p className="text-white-100">Scroll</p>
					<svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="#fffefe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9l-7 7l-7-7" /></svg>
				</div>

			</section>
			<section className=" py-8 bg-white-100 flex flex-col items-center justify-center rounded-xl mb-8">
				<h3 className="text-black-100 xl:text-4xl text-2xl font-semibold my-4">New Arrivals</h3>
				<div className="max-w-5xl">
					<p className="text-black-100 xl:text-xl text-md font-light text-center mb-8 px-16 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo doloremque minus, aspernatur eum quae. Voluptatem doloribus corrupti, esse rem quo dolore velit beatae itaque eligendi aut tempore deserunt placeat?</p>
				</div>
				<GridCard />
			</section>
			<section className="my-12 bg-white-100 flex flex-col items-center justify-center rounded-xl">
				<div className="bg-orange-100 w-full rounded-t-large xl:pl-16">
					<h2 className="text-black-100 xl:text-4xl text-2xl font-semibold my-4">Shop All</h2>
				</div>
				<div className='grid xl:grid-cols-3 grid-cols-1 grid-flow-row  gap-4  py-8 '>
					{products.map((product : ProductType, index) => (
						<Link key={index} href={`/${product.id}`}>
							<CardProductComponent
									name={product.name}
									image={product.image}
									price={product.price}
								/>
						</Link>
					))}

				</div>
			</section>
		</>

	);
}