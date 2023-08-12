import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import {
    queryState,
    resultsState,
    itemIdState,
    itemDataSelector,
} from "./atoms";

export function useSearchResults() {
    const params = useParams();
    const [query, setQuery] = useRecoilState(queryState);

    useEffect(() => {
        setQuery({ search: params.busqueda });
    }, [params.busqueda]);

    const results = useRecoilValue(resultsState);
    return results;
}

export function useItemData() {
    const params = useParams();
    const [id, setId] = useRecoilState(itemIdState);

    useEffect(() => {
        setId({ id: params.id });
    }, [params.id]);

    const itemData = useRecoilValue(itemDataSelector);
    return itemData;
}
