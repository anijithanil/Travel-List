import { useState } from "react";
import { Item } from './Item';

export function PackingList({ setItems, items, onDeleteItems, onToggleItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems;
  if (sortBy === 'input') {
    sortItems = items;
  }
  if (sortBy === 'description') {
    sortItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === 'packed') {
    sortItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  function clearItems() {
    console.log("clear fun called");
    const confirmed = window.confirm("Are you sure u want to delete all items");
    if (confirmed) setItems([]);
  }

  return <div className="list">
    <ul>

      {sortItems.map((item) => (

        <Item onToggleItems={onToggleItems} onDeleteItems={onDeleteItems} item={item} key={item.id} />

      ))}
    </ul>
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input order</option>
        <option value="description">Sort by Description order</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={clearItems}>Clear List</button>
    </div>
  </div>;
}
