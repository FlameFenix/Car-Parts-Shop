import { useCart } from 'react-use-cart';
import './CartItem.css';

export const CartItem = ({ id, name, price }) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    return (
        <tr >
            <th scope="row">
                {id}
            </th>
            <td>
                {name}
            </td>
            <td>
                1
            </td>
            <td>
                {price}лв
            </td>
            <td>
                <button color="danger" onClick={() => removeItem(id)}>&times;</button>
            </td>
        </tr >
    );
}
