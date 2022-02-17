/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable no-undef */
import state from "../state";
import getComments from "../getComments";

function renderNews(categoryId) {
    const nodeMainDiv = document.querySelector(".news_content");
    nodeMainDiv.textContent = "";

    state.news
        .filter((newsItem) => {
            if (categoryId === undefined) {
                return true;
            } else {
                return newsItem.categoryId._id === categoryId;
            }
        })
        .forEach((news) => {
            const newsTitle = document.createElement("div");
            newsTitle.textContent = news.title;
            newsTitle.classList.add("news-title");
            nodeMainDiv.append(newsTitle);

            newsTitle.addEventListener("click", () => {
                nodeMainDiv.textContent = "";

                const nodeButtonReturn = document.createElement("div");
                const nodeNewsTitle = document.createElement("h1");
                const nodeNewsText = document.createElement("p");
                const nodeComment = document.createElement("h3");
                const nodeLine = document.createElement("hr");

                nodeButtonReturn.textContent = "<";
                nodeNewsTitle.textContent = news.title;
                nodeNewsText.textContent = news.text;
                nodeComment.textContent = "Комментарии:";

                nodeButtonReturn.classList.add("button-return");
                nodeNewsTitle.classList.add("news-title-by-one");

                nodeButtonReturn.addEventListener("click", () => {
                    renderNews();
                });

                nodeMainDiv.append(
                    nodeButtonReturn,
                    nodeNewsTitle,
                    nodeNewsText,
                    nodeComment,
                    nodeLine
                );
                console.log(news._id);
                getComments(news._id);
            });
        });
}

export default renderNews;
