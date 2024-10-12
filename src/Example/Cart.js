import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
    const { cart } = useContext(CartContext)

    return(

        <>
        <h1>Cart</h1>
        <ul>
            {cart.map((item, index) => (
                <li key={index}>
                    {item.name}
                </li>
            ))}
        </ul>
        </>
    )
}

export default Cart