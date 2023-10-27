import React from "react";
import sytles from "../css/styles.css";
import Category from "./Category";

const Items = [
	{name: "Desctop PC"},
	{name: "Desctop PC"},
	{name:"Desctop PC"},
];

export default function App() {
	return (
		<>
			<Category category={"hello"} />
		</>
	);
}
