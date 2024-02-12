import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchResults } from "../../hooks"; 
import { MyButton } from "../../ui/buttons/button";
import { MyTitle } from "../../ui/title-text/title";
import css from "./SearchResults.module.css";


export function SearchResults (){
    const productsResultsFromState = useSearchResults();
    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
    };
    }, []);

    let adjustedLevel;
    if (screenWidth >= 569) {
        adjustedLevel = 2; 
    }
    
    return (<div className={css.root}>
                <ul className={css.ul}>
                    {productsResultsFromState.map((res) => (
                        <li key={res.id} className={css.li}>
                            <div className={css.imgContainer}>
                                <img className={css.img} src={res.thumbnail?.replace("-I.", "-O.")} alt={res.title} />
                            </div>
                            <div className={css.divInfo}>
                                <MyTitle level={screenWidth < 615 ? 3 : screenWidth >= 1024 ? 1 : adjustedLevel} text={res.title} className={css.title}></MyTitle>
                                <span className={css.span}>{"Precio: " + (res.currency_id === "CRC"? "₡": "$") + (res.price? res.price: "Sin especificar")}</span>
                                <Link className={css.link} to={"/item/" + res.id}>
                                    <MyButton>Ver detalles</MyButton>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>)
}