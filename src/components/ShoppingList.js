import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // Set initial value to "All" so all the items on the list show
  const [selectedCategory, setSelectedCategory] = useState('All')

  // When onChange is triggered, update selectedCategory based on the selected value
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  // Filter through items array. If category = "All", assign entire items array to filteredItems, otherwise, use filter method to create a new array containing only the items that match the value of selectedCategory.
  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Map through 'filteredItems' instead of 'items' */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

