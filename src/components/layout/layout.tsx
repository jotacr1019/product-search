import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../searchForm/searchForm";
import  css  from "./layout.module.css";


export function Layout(){
    return (
        <div className={css.root}> 
            <SearchForm />
            <Suspense fallback={<div className={css.loading}><div className={css.progress}></div></div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}