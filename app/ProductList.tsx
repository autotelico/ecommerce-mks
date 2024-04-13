interface Product {
    id: number;
    name: string;
    photo: string;
    brand: string;
    description: string;
    price: number;
  }

export default function ProductList({products, handleClick}: {
    products: Product[],
    handleClick: any,
}): JSX.Element {
  return (
    <div id="content">
      <p>Data:</p>
      {products.map((product: Product) => {
        return (
          <div key={product.id}>
            <img src={product.photo} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <button onClick={() => handleClick(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        );
      })}
    </div>
  );
}
