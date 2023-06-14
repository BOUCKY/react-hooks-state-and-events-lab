import React, {useState} from "react";

function Item({ name, category }) {

  // Set inCart initial value to false (there is not something in the cart)
  const [inCart, setCart] = useState(false)

  // When onClick is triggered, toggle inCart state between true and false
  const handleCartToggle = () => {
    setCart(!inCart)
  }

  return (
    // if inCart is true, assign 'in-cart' class name. If it's false, don't assign a class name
    <li className={inCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>Add to Cart</button>
    </li>
  );
}

export default Item;
