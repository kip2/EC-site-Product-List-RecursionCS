import React from "react";
import sytles from "../css/styles.css";

export default function Product({ name, imgUrl, price, description }) {
    return (
        <>
            <section className={sytles.card}>
                <img src={imgUrl} />
                <p>{name}</p>
                <p>¥{price}</p>
                <div className={sytles.popup} hidden>
                    {description}
                </div>
            </section>
        </>
    );
}