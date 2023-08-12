import React from 'react';
import css from "./button.module.css";


export function MyButton({children}){
    return (<button className={css.button}>{children}</button>)
}