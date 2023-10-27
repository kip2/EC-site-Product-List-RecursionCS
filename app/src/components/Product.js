import React from "react";
import sytles from "../css/styles.css";

export default function Product({ name, imgUrl, price }) {
    return (
        <>
            <section className={sytles.card}>
                <img src={imgUrl} />
                <h1>{name}</h1>
                <p>{price}</p>
            </section>
        </>
    );
}