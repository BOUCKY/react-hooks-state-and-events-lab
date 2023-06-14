import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  // Set initial value of darkMode to false (dark mode is not automatically active)
  const [darkMode, setDarkMode] = useState(false);

  // if darkMode is true, make the class name 'App dark', otherwise, the cass name is 'App light'
  const appClass = darkMode ? "App dark" : "App light"

  return (
    // use appClass var to determine class name
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
