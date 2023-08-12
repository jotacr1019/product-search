import React from "react";
import css from "./title.module.css";

export function MyTitle(props) {
    const HeadingTag: any = `h${props.level}`;
    return (<HeadingTag className={`${css.root} ${props.className}`}>{props.text}</HeadingTag>)
}