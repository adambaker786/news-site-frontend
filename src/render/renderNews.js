import state from '../state';

function renderNews() {
    const nodeMainDiv = document.querySelector('.content');
    state.news.forEach((news) => {
        const newsTitle = document.createElement('div');
        newsTitle.textContent = news.title;
        nodeMainDiv.append(newsTitle);
        
        newsTitle.addEventListener('click', () => {
            nodeMainDiv.textContent = '';
            const nodeNewsTitle = document.createElement('h1');
            nodeNewsTitle.textContent = news.title;
            
            const nodeNewsText = document.createElement('p');
            nodeNewsText.textContent = news.text;

            nodeMainDiv.append(nodeNewsTitle, nodeNewsText)         
        })
    }) 
}

export default renderNews;