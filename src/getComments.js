/* eslint-disable no-undef */
import renderComments from './render/renderComments';
import state from './state';

function getComments(newsId) {
    // const commentURL = `http://localhost:4000/news/comments/${newsId}`
    const commentURL = `http://localhost:4000/news/comments/news/${newsId}`;
    fetch(commentURL)
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