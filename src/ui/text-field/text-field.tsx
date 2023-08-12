import React from 'react';
import css from "./text-field.module.css";


export function TextField({type, children}) {
    return <div className={css.textField}>
            <input className={css.input} type={type} name={children} placeholder={"..." + children.toLowerCase()}/>
        </div>
}