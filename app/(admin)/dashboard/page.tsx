"use client"
import { ProductType } from "@/libs/definition";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import { BASE_URL, ACCESS_TOKEN } from "@/libs/constant";
import {Spinner} from "@nextui-org/react";
import { useRouter } from "next/navigation";




export default function Dashboard() {
	const router = useRouter();
	const [products, setProducts] = useState<ProductType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState(false);
	const [productDetail, setProductDetail] = useState<ProductType | null>(null);
	// fetch products
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

	const [imagePlaceholder, setImagePlaceholder] = useState<string>(
		"https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
	);

	const handleViewProduct = (product: ProductType) => {
		setProductDetail(product);
		setOpenModal(true);
	};

	const handleEditProduct = (productId: number) => {
		router.push(`/edit-product/${productId}`);
	};

	const handleDeleteProduct = (productId: number) => {
		fetch(`${BASE_URL}/api/products/${productId}/`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${ACCESS_TOKEN}`,
			},
		})
			.then((res) => {
				if (res.ok) {
					// Filter out the deleted product from the state
					setProducts(products.filter((product) => product.id !== productId));
				} else {
					throw new Error("Failed to delete product");
				}
			})
			.catch((error) => {
				console.error("Error deleting product:", error);
				// Handle error as needed
			});
	};

	const columns: TableColumn<ProductType>[] = [
		{
			name: "Product Name",
			selector: (row) => row.name,
		},
		{
			name: "Price (USD)",
			selector: (row) => row.price,
			sortable: true,
		},
		{
			name: "Image",
			selector: (row): any => (
				<img className="w-16 h-16" src={row.image} alt={row.image} />
			),
			sortable: true,
		},
		{
			name: "Category",
			selector: (row) => row.category,
			sortable: true,
		},
		{
			name: "Action",
			selector: (row): any => (
				<div>
					<button
						onClick={() => {
							console.log(row.id)
							handleViewProduct(row)
						}
						}
						className="bg-blue-600 text-white-100 mx-2 px-2 py-1 rounded-xl uppercase font-semibold"
					>
						view
					</button>
					<button onClick={()=> handleEditProduct(row.id) } className="bg-yellow-400 text-white-100 mx-2 px-2 py-1 rounded-xl uppercase font-semibold">edit</button>
					<button onClick={() => handleDeleteProduct(row.id)} className="bg-red-600 text-white-100 mx-2 px-2 py-1 rounded-xl uppercase font-semibold">delete</button>
				</div>
			),
		},
	];

	return (
		<main className="min-h-screen ">
			<DataTable
				fixedHeader
				progressPending={loading}
				progressComponent={<Spinner className=" w-full pt-8"/>}
				columns={columns}
				data={products}
				customStyles={customStyles}
				striped
				highlightOnHover
			/>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<Modal.Header>Product Detail</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<Image
							className="mx-auto"
							src={productDetail?.image || imagePlaceholder}
							alt={productDetail?.name || "Unknown"}
							width={250}
							height={300}
						/>
						<h3 className="text-3xl text-gray-700">{productDetail?.name || "Untitle"}</h3>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							{productDetail?.desc || "No description"}
						</p>

					</div>
				</Modal.Body>
			</Modal>
		</main>
	);
}

const customStyles = {
	rows: {
		style: {
			minHeight: "72px", // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: "38px", // override the cell padding for head cells
			paddingRight: "8px",
			fontSize: "1.2rem",
			backgroundColor: "#f1f1f1",
		},
	},
	cells: {
		style: {
			paddingLeft: "38px", // override the cell padding for data cells
			paddingRight: "8px",
		},
	},
};
