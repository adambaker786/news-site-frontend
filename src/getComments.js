/* eslint-disable no-undef */
import renderComments from './render/renderComments';
import state from './state';

function getComments() {
    fetch("http://localhost:4000/news/comments")
    .then(res => res.json())
    .then((comments) => {
        state.comments = comments;
        renderComments()
    })
    .catch ((err) => {
        console.log(err);
    })
}

export default getComments