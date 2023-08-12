import React from "react";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../../ui/buttons/button";
import { TextField } from "../../ui/text-field/text-field";
import css from "./search-form.module.css";

export function SearchForm(){
    const navigate = useNavigate();
    const handleSearch = (search) => {
        search.preventDefault();
        const searchWord = search.target.Busqueda.value;
        if(searchWord){
            navigate("/search/" + searchWord, {replace: true});
        }
    }

    return (<form onSubmit={handleSearch} className={css.root}>
                <TextField type="text">Busqueda</TextField>
                <MyButton>Buscar</MyButton>
        </form>)
}