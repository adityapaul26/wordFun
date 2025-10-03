import React from "react";
import { Row } from "./Row";

export const Square = ({ guess }) => {
    if (!Array.isArray(guess)) return null;
    return (
        <>
            {guess.map((g, i) => (
                <Row key={i} letters={g.letters} colors={g.colors} />
            ))}
        </>
    );
};