import React, { useState } from "react";
import sytles from "../css/styles.css";
import Category from "./Category";
import productList from "../json/productList.json";

export default function App() {
	const [data] = useState(productList);

	return (
		<div>
			{
				data.map(products => {
					return <Category category={products.category} />;
				})
			}
		</div>
	);
}
