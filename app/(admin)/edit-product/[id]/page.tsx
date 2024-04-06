'use client'

import { useEffect, useState } from "react";
import { BASE_URL, ACCESS_TOKEN } from "@/libs/constant";
import style from "./style.module.css";

type Props = {
    params: { id: string };
};

type CategoryType = {
    name: string;
    icon: string;
};

type ProductPostType = {
    category: CategoryType;
    name: string;
    desc: string;
    image: string;
    price: number;
    quantity: number;
};

export default function Product({ params }: Props) {
    const productId = params.id;

    const [loading, setLoading] = useState<boolean>(false);
    const [product, setProduct] = useState<ProductPostType | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/api/products/${productId}/`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch product");
                }
                return res.json();
            })
            .then((data) => {
                if (!data) {
                    throw new Error("Empty product data");
                }
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching product:", err);
                setLoading(false);
            });
    }, [productId]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        try {
            await fetch(`${BASE_URL}/api/products/${productId}/`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
                body: formData,
            });
            console.log("Product updated successfully");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <main className={`${style.container}`}>
            <form onSubmit={handleSubmit}>
                <h1>Edit Product</h1>
                <div>
                    <label>Category Name</label>
                    <input type="text" name="categoryName" defaultValue={product.category.name} />
                </div>
                <div>
                    <label>Category Icon</label>
                    <input type="text" name="categoryIcon" defaultValue={product.category.icon} />
                </div>
                <div>
                    <label>Product Name</label>
                    <input type="text" name="name" defaultValue={product.name} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="desc" defaultValue={product.desc} />
                </div>
                <div>
                    <label>Image URL</label>
                    <input type="text" name="image" defaultValue={product.image} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="price" defaultValue={product.price.toString()} />
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" defaultValue={product.quantity.toString()} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}
