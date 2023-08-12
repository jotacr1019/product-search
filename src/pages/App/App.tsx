import React from "react";
import { MyTitle } from "../../ui/title-text/title";
import css from "./App.module.css";


export function Home (){
    return (<div className={css.root}>
            <MyTitle className={css.title} level={1} text={"Buscador de productos hecho en 'React'"} />
            <MyTitle level={3} className={css.subTitle} text={"Ingresá el nombre del producto que quieras buscar en la parte de arriba"}></MyTitle>
        </div>)
}
