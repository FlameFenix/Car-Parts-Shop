import { useContext } from 'react';
import { useCart } from 'react-use-cart';
import { CartContext } from '../../../contexts/cartContext';
import './Article.css'
export const Article = ({ id, Name, Price, Quantity, URL, Description }) => {

    const { addItem } = useCart();
    const price = Price;
    const onBuyHandler = (e) => {
        e.preventDefault()
        const cartItem = { id, Name, price };
        console.log(cartItem);
        //onAddHandler(item);
        addItem(cartItem);
    }

    return (
        <article class="article">
            <header>
                <h2>{Name}</h2>
            </header>
            <img src={URL} alt="Hot air balloons" />
            <div class="content">
                <p>Description: {Description} </p>
                <p>Price: {Price} $</p>
            </div>

            <button className="buy-btn" onClick={(e) => onBuyHandler(e)}>Buy Now</button>
        </article>

    );
}