import React, { useState } from "react";
import sytles from "../css/styles.css";
import Category from "./Category";

const categories = [
		"test1",
		"test2",
		"test3"
	];

export default function App() {

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
