import { useState } from "react";
import Items from "./Items";

export default function PackingList({ items, handleDItems, handleToggledItem, handleClearList }) {

    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = items;
    }

    if (sortBy === "description") {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    }

    if (sortBy === "packed") {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                { sortedItems.map((item) => (
                    <Items
                        item={ item }
                        handleDItems={ handleDItems }
                        handleToggledItem={ handleToggledItem }
                        key={ item.id } />
                )) }
            </ul>

            <div className="actions">
                <select value={ sortBy } onChange={ (e) => setSortBy(e.target.value) }>
                    <option value="input">SORT BY INPUT ORDER</option>
                    <option value="description">SORT BY DESCRIPTION</option>
                    <option value="packed">SORT BY PACKED STATUS</option>
                </select>
                <button onClick={ handleClearList }>Clear list</button>
            </div>
        </div>
    )
}
