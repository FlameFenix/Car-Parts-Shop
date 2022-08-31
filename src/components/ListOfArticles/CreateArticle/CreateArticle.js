import './CreateArticle.css'
import { useState } from 'react';
import { db } from '../../../services/dbInit';
import { collection, addDoc } from 'firebase/firestore';

export const CreateArticle = () => {
    const [article, setArticle] = useState({});

    function createExample(e) {
        e.preventDefault();

        if (article === '') {
            return
        }

        console.log(e.target);
        const { Name, URL, Description, Price } = Object.fromEntries(new FormData(e.target));

        const obj = {
            Name,
            URL,
            Description,
            Price
        }

        const articles = collection(db, 'Articles')
        addDoc(articles, { ArticleName: obj })
            .then(res => console.log(res))
            .catch(error => alert(error));
    }

    return (
        <form className="create-article-form" onSubmit={createExample}>
            <label htmlFor="Name">Article Name</label>
            <input type="text" name="Name" id="Name" />

            <label htmlFor="URL">Image URL</label>
            <input type="text" name="URL" id="URL" />

            <label htmlFor="Description">Description </label>
            <input type="text" name="Description" id="Description" />

            <label htmlFor="Price">Price</label>
            <input type="number" name="Price" id="Price" />

            <input type="submit" className="submit-btn" value="Create Article" />
        </form>
    );
}
