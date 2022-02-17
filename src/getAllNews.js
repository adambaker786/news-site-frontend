/* eslint-disable no-undef */
import renderNews from "./render/renderNews";
import getComments from "./getComments"
import state from "./state"

function getNews() {
    fetch("http://localhost:4000/news")
    .then(res => res.json())
    .then((news) => {
        state.news = news;
        renderNews()
        // getComments() 
    })
    .catch((err) => {
        console.log(err);
    })
}

export default getNews