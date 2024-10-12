import { useContext } from "react";
import { CartContext } from "./CartContext";


function ProductList(){
    const { addToCart } = useContext(CartContext)

    const products = [
        {id: 1, name: "Pen"},
        {id: 2, name: "Book"},
    ]

    return(
        <>
        <h1>Products</h1>
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} 
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ProductList