/* eslint-disable no-undef */
import state from "../state";

function renderComments() {
    const nodeMainDiv = document.querySelector(".news_content");
    state.comments.forEach((comment) => {
        const nodeComment = document.createElement("div");
        const nodeLogin = document.createElement('div');
        const nodeCommentText = document.createElement("div");

        nodeLogin.textContent = 'Гость:'
        nodeCommentText.textContent = comment.text;

        nodeComment.classList.add('comment');
        nodeLogin.classList.add('login');
        nodeCommentText.classList.add('comment-text');

        nodeComment.append(nodeLogin, nodeCommentText)
        nodeMainDiv.append(nodeComment);
    });
}

export default renderComments;
