export default function Stats({ items }) {

    if (!items.length) {
        return (
            <footer className="stats">
                Please start adding adding items to your list
            </footer>
        )
    }

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
        <footer className="stats">
            { percentage === 100 ? `You got everything checked ✈️` :
                `💼 You have ${numItems} items in your list, and you already packed ${numPacked} (${percentage}%)`
            }
        </footer>)
}
