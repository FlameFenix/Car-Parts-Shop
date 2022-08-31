import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/dbInit';
import { Article } from './Article/Article';
import './ListOfArticles.css'

export const ListOfArticles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getEelments();
    }, []);

    function getEelments() {
        const elementsCollection = collection(db, 'Articles');

        getDocs(elementsCollection).then(res => {
            const elements = res.docs.map(x => ({
                data: x.data(),
                id: x.id,
            }))
            setArticles(elements);
            console.log(elements);
        }).catch(err => console.log(err));
    }

    return (
        <div className="articles">
            {/* {articles.map(x => <li key={x.id}> {x.data.ArticleName.Price} </li>)} */}
            {articles.map(x => <Article key={x.id}  {...x.data.ArticleName} />)}
        </div>
    );
}
