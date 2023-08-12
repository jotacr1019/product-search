import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/App/App";
import { Layout } from "../components/layout/layout";
import { SearchResults } from "../pages/SearchResults/SearchResults";
import { ResultItem } from "../components/itemResult/itemResult";
import "../index.css";


export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search/:busqueda" element={<SearchResults />} />
                <Route path="/item/:id" element={<ResultItem />} />
            </Route>
        </Routes>
    )
}