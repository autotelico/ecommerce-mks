"use client";
import { Suspense, useEffect, useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";

interface Product {
  id: number;
  name: string;
  photo: string;
  brand: string;
  description: string;
  price: number;
}

export default function Home() {
  const [jsonData, setJsonData] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([])

  useEffect(() => {
    if (!jsonData.length) {
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=name&orderBy=DESC"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.products);
          setJsonData(data.products);
        });
    }
  }, []);

  function addToCart(product: Product): void {
    setCartItems([...cartItems, product])
    console.log('Carrinho: ', cartItems);
    
  }

  function removeFromCart(product: Product): void {
    const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== product.id)
    console.log(filteredCartItems);
    setCartItems(filteredCartItems)
  }

  return (
    <>
    <Header products={cartItems}/>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductList products={jsonData} handleClick={addToCart}/>
      </Suspense>
    </>
  );
}
