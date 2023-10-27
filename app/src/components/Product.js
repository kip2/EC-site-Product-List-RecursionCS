import React from "react";

export default function Product({ name, imgUrl, price }) {
    return (
        <>
            <p>{name}</p>
            <p>{imgUrl}</p>
            <p>{price}</p>
        </>
    );
}