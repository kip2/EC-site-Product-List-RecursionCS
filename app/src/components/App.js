import React, { useState } from "react";
import sytles from "../css/styles.css";
import Category from "./Category";
import productList from "../json/productList.json";

export default function App() {
	const [data] = useState(productList);

	return (
		<>
			<h1>Product List</h1>
			{
				data.map(products => {
					return <Category category={products.category} />;
				})
			}
		</>
	);
}
