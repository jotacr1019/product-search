import { atom, selector } from "recoil";

export const queryState = atom({
    key: "queryState",
    default: {
        search: "",
    },
});

export const resultsState = selector({
    key: "resultsState",
    get: async ({ get }) => {
        const query = get(queryState);

        if (query.search.length !== 0) {
            const response = await fetch(
                "https://api.mercadolibre.com/sites/MCR/search?q=" +
                    query.search
            );
            const results = await response.json();

            return results.results.slice(0, 15);
        } else {
            return [];
        }
    },
});

export const itemIdState = atom({
    key: "itemIdState",
    default: {
        id: "",
    },
});

export const itemDataSelector = selector({
    key: "itemDataSelector",
    get: async ({ get }) => {
        const itemId = get(itemIdState);

        if (itemId.id.length !== 0) {
            const response = await fetch(
                "https://api.mercadolibre.com/items/" + itemId.id
            );
            const result = await response.json();

            return {
                pictures: result.pictures.map((pic) => pic.url),
                title: result.title,
                price: result.price,
                currency_id: result.currency_id,
                sellerAddress: result.seller_address,
                availableQuantity: result.available_quantity,
                warranty: result.warranty,
                brand: result.attributes
                    .filter((p) => p.id === "BRAND")
                    .map((p) => p.value_name),
                model: result.attributes
                    .filter((p) => p.id === "MODEL")
                    .map((p) => p.value_name),
                condition: result.attributes
                    .filter((p) => p.id === "ITEM_CONDITION")
                    .map((p) => p.value_name),
            };
        } else {
            return [];
        }
    },
});
