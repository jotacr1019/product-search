import React, { useEffect, useState } from "react";
import { useItemData } from "../../hooks";
import { CarouselSlide } from "../slider/slider";
import { MyTitle } from "../../ui/title-text/title";
import css from "./itemResult.module.css";


export function ResultItem() {
    const itemDataFromHook = useItemData();
    const [itemData, setItemData]: any = useState({
            pictures: [],
            title: "",
            price: 0,
            currency_id: "",
            condition: [],
            sellerAddress: {
                city:{
                    name: "",
                }
            },
            availableQuantity: 0,
            warranty: "",
            brand: [],
            model: []
        });

    useEffect(() => {
        setItemData(itemDataFromHook)
    }, [itemDataFromHook])
    
    return <div className={css.root}>
                <div className={css.slide}>
                    <CarouselSlide pictures={itemData?.pictures} />
                </div>
                <div className={css.container}>
                    <span className={`${css.span} ${css.conditionSpan}`}>{itemData?.condition? itemData?.condition: ""}</span>
                    <MyTitle className={css.title} level={2} text={itemData?.title}></MyTitle>
                    <div className={css.priceAndLocationContainer}>
                        <span>{"Ubicación: " + (itemData?.sellerAddress?.city? itemData?.sellerAddress?.city.name: "Sin especificar")}</span>
                        <div className={css.priceContainer}>
                            <span>{itemData?.currency_id === "CRC"? "₡": "$"}</span>
                            <span>{(itemData?.price? itemData?.price: "Sin especificar")}</span>
                        </div>
                    </div>
                    <div className={css.infoContainer}>
                        <span className={css.span}>{"Marca: " + (itemData?.brand && itemData?.brand[0]?.length > 0 ? itemData?.brand[0]: "Sin especificar")}</span>
                        <span className={css.span}>{"Modelo: " + (itemData?.brand && itemData?.model[0]?.length > 0 ? itemData?.model[0]: "Sin especificar")}</span>
                        <span className={css.span}>{"Cantidad: " + (itemData?.availableQuantity && itemData?.availableQuantity[0]?.length > 0 ? itemData?.availableQuantity[0]: "Sin especificar")}</span>
                        <span className={css.span}>{"Garantía: " + (itemData?.warranty ? itemData?.warranty: "Sin especificar")}</span>
                    </div>
                </div>
            </div>
}