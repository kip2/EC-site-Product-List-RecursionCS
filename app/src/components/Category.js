import React from "react";
import sytles from "../css/styles.css";
import Products from "./Products";

export default function Category({ category, products }) {
    return (
        <>
            <div className={sytles.category}>
                <h2>{category}</h2>
                <Products products={products} />
            </div>
        </>
    );
}