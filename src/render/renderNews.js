/* eslint-disable no-undef */
import state from '../state';
import getComments from '../getComments';

function renderNews() {
    const nodeMainDiv = document.querySelector('.news_content');
    state.news.forEach((news) => {
        const newsTitle = document.createElement('div');
        newsTitle.textContent = news.title;
        nodeMainDiv.append(newsTitle);
        
        newsTitle.addEventListener('click', () => {
            nodeMainDiv.textContent = '';
            
            const nodeNewsTitle = document.createElement('h1');
            const nodeNewsText = document.createElement('p');
            const nodeComment = document.createElement('h3');
            const nodeLine = document.createElement('hr');

            nodeNewsTitle.textContent = news.title;          
            nodeNewsText.textContent = news.text;
            nodeComment.textContent = 'Комментарии:';

            nodeMainDiv.append(nodeNewsTitle, nodeNewsText, nodeComment, nodeLine);


            getComments();
        })
    }) 
}

export default renderNews;