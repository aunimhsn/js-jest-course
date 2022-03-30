/** --
import fetch from 'node-fetch';

async function getPostById(id) {
    try {
        let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let data = await result.json();
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export { getPostById };
**/
