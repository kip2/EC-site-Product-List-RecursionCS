import React from "react";
import sytles from "../css/styles.css";
import Product from "./Product";

export default function Products({ products }) {
    return (
        <>
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