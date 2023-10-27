import React, { useState } from "react";
import sytles from "../css/styles.css";
import Category from "./Category";


export default function App() {
	const categories = [
		"test1",
		"test2",
		"test3"
	]

	return (
		<div>
			{
				categories.map(category => {
					return <Category category={category} />;
				})
			}
		</div>
	);
}
