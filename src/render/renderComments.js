/* eslint-disable no-undef */
import state from "../state";

function renderComments() {
    const nodeMainDiv = document.querySelector(".news_content");
    state.comments.forEach((comment) => {
        const nodeComment = document.createElement("div");
        
        nodeComment.textContent = comment.text;
        nodeMainDiv.append(nodeComment);
    });
}

export default renderComments;
