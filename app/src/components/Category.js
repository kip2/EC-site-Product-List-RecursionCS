import React from "react";
import Products from "./Products";

export default function Category({ category, products }) {
    return (
        <>
            <h2>{category}</h2>
            <Products products={products} />
        </>
    );
}