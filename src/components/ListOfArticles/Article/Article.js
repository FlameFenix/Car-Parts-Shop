import './Article.css'
export const Article = ({ Name, Price, Quantity, URL, Description }) => {
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

            <button className="buy-btn">Buy Now</button>
        </article>

    );
}