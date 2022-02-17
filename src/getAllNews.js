import renderNews from "./render/renderNews";
import state from "./state"

function getNews() {
    fetch("http://localhost:3030/news")
    .then(res => res.json())
    .then((news) => {
        state.news = news;
        // getComments()
        renderNews() 
    })
    .catch((err) => {
        console.log(err);
    })
}

export default getNews