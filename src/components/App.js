import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form"
import PackingList from "./PackingList";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  // const [items, setItem] = useState([]);
  // function handleItems(item) {
  //   setItem((item) => [...items, item]);
  //   console.log(item)
  // }
  const [items, setItem] = useState([]);

  function handleItems(newItem) {
    setItem((prevItems) => [...prevItems, newItem]);
    console.log(newItem);
  }

  function handleDItems(id) {
    setItem((items) => items.filter((item) => item.id !== id))
  }

  function handleToggledItem(id) {
    setItem((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear the list?");
    if (confirmed) {
      setItem([]);
    }

  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={ handleItems } />
      <PackingList
        items={ items }
        handleDItems={ handleDItems }
        handleToggledItem={ handleToggledItem }
        handleClearList={ handleClearList }
      />
      <Stats items={ items } />

    </div>
  )
}




