import { useEffect, useState } from "react";
import { Product } from "../models/products";
import Catalog from "../../features/catalog/Catalog";
import Typography from "@mui/material/Typography/Typography";

// this is our function app
function App() {
  const [products, setProducts] = useState<Product []>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  // IF WE FORGET TO ADD DEPENDENCY, THEN USE EFFECT WILL RUN EVERYTIME OUR COMPPONENT RERENDERS, meaning it will only be executed one time.

  // spread operator (...) is taking two items from array above and spreading them across them into a new array using the setProducst
  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: 'manga3' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/456'
      }
    ])  
  }

  return (
    <div>
      <Typography variant='h1'>Manga-Buzz</Typography>
      <Catalog products={products} addProduct={addProduct} />
      
    </div>
  )
}

export default App
