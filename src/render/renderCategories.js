/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import state from "../state";
import renderNews from "./renderNews";

function renderCategories() {
    const nodeCategories = document.querySelector(".category");
    const nodeMainCategory = document.createElement("div");
    nodeMainCategory.textContent = 'Главная';
    nodeMainCategory.classList.add('category-item')
    nodeCategories.append(nodeMainCategory);

    nodeMainCategory.addEventListener('click', () => {
        renderNews();
    })

    state.categories.forEach((category) => {
        const nodeCategoryName = document.createElement('div');

        nodeCategoryName.textContent = category.name;
        nodeCategoryName.classList.add('category-item')

        nodeCategoryName.addEventListener('click', () => {
            renderNews(category._id);
        })

        nodeCategories.append(nodeCategoryName);
    });
}

export default renderCategories;
