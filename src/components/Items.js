export default function Items({ item, handleDItems, handleToggledItem }) {
    return (
        <li>
            <input type="checkbox"
                value={ item.packed }
                onChange={ () => { handleToggledItem(item.id) } } />
            <span style={ item.packed ? { textDecoration: "line-through" } : {} }>
                { item.quantity } { item.description }
            </span>
            <button onClick={ () => handleDItems(item.id) }>❌</button>
        </li>
    )
}