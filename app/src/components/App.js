import React, { useState } from "react";
import sytles from "../css/styles.css";
import Category from "./Category";
import productList from "../json/productList.json";

export default function App() {
	const [categories] = useState(productList);

	return (
		<div>
			{
				categories.map(category => {
					return <Category category={category.category} />;
				})
			}
		</div>
	);
}
