import React from "react";
import sytles from "../css/styles.css";
import Product from "./Product";

export default function Products({ products }) {
    return (
        <>
            <div className={sytles.container}>
                {
                    products.map(product => {
                        return <Product {...product} />;
                    })
                }
            </div>
        </>
    );
}