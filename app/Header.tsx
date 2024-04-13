"use client";
interface Product {
  id: number;
  name: string;
  photo: string;
  brand: string;
  description: string;
  price: number;
}

export default function Header({
  products,
}: {
  products: Product[];
}): JSX.Element {
  return (
    <header>
      <h1 id="titulo">
        <span>MKS</span> Sistemas
      </h1>
      <div id="cart">{products.length}</div>
    </header>
  );
}
