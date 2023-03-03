import { useContext } from 'react';
import { useCart } from 'react-use-cart';
import { CartContext } from '../../contexts/cartContext';
import { CartItem } from './cartItem/CartItem';
import './Cart.css';

export const Cart = () => {

    const { cartItems } = useContext(CartContext);

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const sum = 0;

    const CalculateSum = (items, sum) => {

        items.map(x => sum += Number(x.price))

        return sum;
    }

    return (
        <>
            <h1>Cart ({totalUniqueItems})</h1>

            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Remove
                        </th>
                    </tr>
                </thead>
                {
                    items.map((x) => (
                        <CartItem key={x.id} id={x.id} name={x.Name} price={x.price} />
                    ))
                }
                <tr >
                    <th scope="row">

                    </th>
                    <td>

                    </td>
                    <td>
                        Total:
                    </td>
                    <td>
                        {CalculateSum(items, sum)}лв.
                    </td>
                </tr >
            </table>


            {/* <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.id} x {item.quantity} x {item.name} x {item.price}лв &mdash;
                        <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                            -
                        </button>
                        <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                            +
                        </button>
                        <button onClick={() => removeItem(item.id)}>&times;</button>
                    </li>
                ))}
            </ul> */}
        </>

    );
}