import React from "react";
import Product from "./Product";

export default function Category({ category, products }) {
    return (
        <>
            <p>{category}</p>
            <div>
                {
                    products.map(product => {
                        return <Product {...product} />;
                    })
                }
            </div>
        </>
    );
}