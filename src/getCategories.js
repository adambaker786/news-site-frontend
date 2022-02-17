import state from './state';
import renderCategories from './render/renderCategories';

function getCategories() {
    fetch("http://localhost:4000/news/category")
    .then(res => res.json())
    .then((categories) => {
        state.categories = categories;
        renderCategories();
    })
    .catch((err) => {
        console.log(err);
    })
}

export default getCategories;