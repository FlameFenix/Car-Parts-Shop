import { collection, getDocs } from 'firebase/firestore';
import { db } from './dbInit';

function getEelments() {
    const elementsCollection = collection(db, 'elements');

    getDocs(elementsCollection).then(res => {
        const elements = res.docs.map(x => ({
            data: x.data(),
            id: x.id,
        }))

        console.log(elements, 'get');
        return  elements;

    }).catch(err => console.log(err));
}

export default getEelments;