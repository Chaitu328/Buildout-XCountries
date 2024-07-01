import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, img }) => {
    return (
        <div className={styles.card}>
            <img src={img} alt="img not found" />
            <h1>{name}</h1>
        </div>
    );
};

export default Card;
