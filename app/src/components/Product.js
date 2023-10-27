import React from "react";
import sytles from "../css/styles.css";

export default function Product({ name, imgUrl, price }) {
    return (
        <>
            <section className={sytles.card}>
                <img src={imgUrl} />
                <p>{name}</p>
                <p>¥{price}</p>
            </section>
        </>
    );
}