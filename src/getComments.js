import renderComments from './render/renderComments';
import state from './state';

function getComments() {
    fetch("http://localhost:3030/news")
    .then(res => res.json())
    .then((comments) => {
        state.comments = comments;
        renderComments()
    })
    .catch ((err) => {
        console.log(err);
    })
}