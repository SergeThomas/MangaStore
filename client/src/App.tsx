import { useEffect, useState } from "react";

// this is our function app
function App() {
  const [products, setProducts] = useState(
    [
      {name: 'manga1', price: 123.00},
      {name: 'manga2', price: 145.00},
    ]
  );

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  // IF WE FORGET TO ADD DEPENDENCY, THEN USE EFFECT WILL RUN EVERYTIME OUR COMPPONENT RERENDERS, meaning it will only be executed one time.

  // spread operator (...) is taking two items from array above and spreading them across them into a new array using the setProducst
  function addProduct() {
    setProducts(prevState => [...prevState, {name: 'manga3' + (prevState.length + 1), price: (prevState.length * 100) + 100}])  
  }

  return (
    <div>
      <h1 style={{color: 'blue'}}>Manga Store</h1>
      <ul>
        {products.map(item => (
          <li key={item.name}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Items</button>
    </div>
  )
}

export default App
