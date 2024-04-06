'use client'

import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";
import { BASE_URL, ACCESS_TOKEN } from "@/libs/constant";

// Assuming you have a product ID passed as a prop or from the URL
type Props = {
    params: { id: string };
};

const initialValues = {
    categoryName: "",
    categoryIcon: "",
    name: "",
    desc: "",
    image: "",
    price: 0,
    quantity: 0,
    fileIcon: null,
    fileProduct: null,
};


type ProductUpdateType = {
    categoryName: string;
    categoryIcon: string;
    name: string;
    desc: string;
    image: string;
    price: number;
    quantity: number;
    fileIcon: File | null;
    fileProduct: File | null;
};


const FILE_SIZE = 1024 * 1024 * 2; // 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const validationSchema = Yup.object().shape({
    categoryName: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    desc: Yup.string().nullable(),
    price: Yup.number().required("Required"),
    quantity: Yup.number().required("Required"),
    fileIcon: Yup.mixed()
        .test("fileFormat", "Unsupported Format", (value: any) => {
            if (!value) {
                return true;
            }
            return SUPPORTED_FORMATS.includes(value.type);
        })
        .test("fileSize", "File Size is too large", (value: any) => {
            if (!value) {
                true;
            }
            return value.size <= FILE_SIZE;
        })

        .required("Required"),
    fileProduct: Yup.mixed()
        .test("fileFormat", "Unsupported Format", (value: any) => {
            if (!value) {
                return true;
            }
            return SUPPORTED_FORMATS.includes(value.type);
        })
        .test("fileSize", "File Size is too large", (value: any) => {
            if (!value) {
                true;
            }
            return value.size <= FILE_SIZE;
        })

        .required("Required"),
});

export default function Product(props: Props) {
    const productId = props.params.id;
    const [productData, setProductData] = useState(initialValues);
    const [fileIcon, setFileIcon] = useState(null);
    const [fileProduct, setFileProduct] = useState(null);
    const fileIconRef = useRef(null);
    const fileProductRef = useRef(null);


    const handleFileIconChange = (event:any) => {
        setFileIcon(event.currentTarget.files[0]);
    };

    const handleFileProductChange = (event:any) => {
        setFileProduct(event.currentTarget.files[0]);
    };

    useEffect(() => {
        // Fetch product data when component mounts
        if (productId) {
            fetch(`${BASE_URL}/api/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            })
                .then(response => response.json())
                .then(data => {
                    // Populate form with existing product data
                    setProductData({
                        categoryName: data.category.name,
                        categoryIcon: data.category.icon,
                        name: data.name,
                        desc: data.desc,
                        image: data.image,
                        price: data.price,
                        quantity: data.quantity,
                        fileIcon: null, // You might need to handle file updates differently
                        fileProduct: null, // Same here
                    });
                })
                .catch(error => console.error("Error fetching product:", error));
        }
    }, [productId]);

    const handleSubmitProduct = async (values: any) => {
        // Update product logic here
        // This will be similar to your create product logic but with a PUT request
        // For example:
        const productPost = {
            category: {
                name: values.categoryName,
                icon: values.categoryIcon, // Assuming you handle icon updates separately
            },
            name: values.name,
            desc: values.desc,
            image: values.image, // Assuming you handle image updates separately
            price: values.price,
            quantity: values.quantity,
        };

        try {
            const response = await fetch(`${BASE_URL}/api/products/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
                body: JSON.stringify(productPost),
            });

            if (!response.ok) {
                throw new Error("Failed to update product");
            }

            console.log("Product updated successfully");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <main className={`${style.container}`}>
            <Formik
                initialValues={productData}
                validationSchema={validationSchema}
                onSubmit={handleSubmitProduct}
            >
                {({ setFieldValue }) => (
                    <Form className="bg-gray-100 p-4 rounded-lg max-w-4xl ">
                        <h1 className={`${style.title}`}>Update Product</h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                            <div>
                                {/* Product Name */}
                                <div className="mb-5">
                                    <label className={`${style.label}`} htmlFor="name">
                                        Product Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        className={`${style.input}`}
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className={`${style.error}`}
                                    />
                                </div>

                                {/* Product Description */}
                                <div className="mb-5">
                                    <label className={`${style.label}`} htmlFor="desc">
                                        Product Description
                                    </label>
                                    <Field
                                        type="text"
                                        name="desc"
                                        id="desc"
                                        component="textarea"
                                        className={`${style.input}`}
                                    />
                                    <ErrorMessage
                                        name="desc"
                                        component="div"
                                        className={`${style.error}`}
                                    />
                                </div>

                                {/* Product Price */}
                                <div className="mb-5">
                                    <label className={`${style.label}`} htmlFor="price">
                                        Product Price
                                    </label>
                                    <Field
                                        type="number"
                                        name="price"
                                        id="price"
                                        className={`${style.input}`}
                                    />
                                    <ErrorMessage
                                        name="price"
                                        component="div"
                                        className={`${style.error}`}
                                    />
                                </div>

                                {/* Product Quantity */}
                                <div className="mb-5">
                                    <label className={`${style.label}`} htmlFor="price">
                                        Product Quantity
                                    </label>
                                    <Field
                                        type="number"
                                        name="quantity"
                                        id="quantity"
                                        className={`${style.input}`}
                                    />
                                    <ErrorMessage
                                        name="quantity"
                                        component="div"
                                        className={`${style.error}`}
                                    />
                                </div>

                                

                            </div>
                            <div>
                                {/* Product Category */}
                                <div className="mb-5">
                                    <label className={`${style.label}`} htmlFor="categoryName">
                                        Product Category Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="categoryName"
                                        id="categoryName"
                                        className={`${style.input}`}
                                    />
                                    <ErrorMessage
                                        name="categoryName"
                                        component="div"
                                        className={`${style.error}`}
                                    />
                                </div>
                                
                            </div>
                        </div>
                        {/* Product Category Icon*/}
                        <div className="mb-5">
                                    <label className={`${style.label}`} htmlFor="categoryIcon">
                                        Product Category Icon
                                    </label>
                                    <Field
                                        type="file"
                                        name="fileIcon"
                                        id="fileIcon"
                                        component={CustomInput}
                                        setFieldValue={setFieldValue}
                                        className={`${style.input}`}
                                    />
                                    <ErrorMessage
                                        name="fileIcon"
                                        component="div"
                                        className={`${style.error}`}
                                    />
                                </div>

                                {/* Product Image*/}
                                <div className="mb-5">
                                    <label className={`${style.label}`} htmlFor="fileProduct">
                                        Product Image
                                    </label>
                                    <Field
                                        type="file"
                                        name="fileProduct"
                                        id="fileProduct"
                                        component={CustomInput}
                                        setFieldValue={setFieldValue}
                                        className={`${style.input}`}
                                    />
                                    <ErrorMessage
                                        name="fileProduct"
                                        component="div"
                                        className={`${style.error}`}
                                    />
                                </div>
                        <button type="submit" className={`${style.button}`}>
                            Update
                        </button>
                    </Form>
                )}
            </Formik>
        </main>
    );
}
const CustomInput = ({ field, form, setFieldValue }: any) => {
    const [imagePreview, setImagePreview] = useState("");

    const handleUploadeFile = (e: any) => {
        const file = e.target.files[0];
        const localUrl = URL.createObjectURL(file);
        console.log(localUrl);
        setImagePreview(localUrl);

        setFieldValue(field.name, file);
    };
    return (
        <div>
            <input onChange={(e) => handleUploadeFile(e)} type="file" />
            {imagePreview && <img src={imagePreview} alt="preview" />}
        </div>
    );
};