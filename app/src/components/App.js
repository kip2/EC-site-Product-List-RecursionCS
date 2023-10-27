import React from "react";
import sytles from "../css/styles.css";
import Category from "./Category";

const Items = [
	"Desctop PC",
	"Smart Phone",
	"Tablet",
	"Laptop"
];

export default function App() {
	return (
		<>
			{Items.map((item) => {
				<Category category={item} />
			})}
		</>
	);
}
