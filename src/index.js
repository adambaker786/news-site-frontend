/* eslint-disable no-undef */
/* eslint-disable camelcase */

import style from "./styles.css";

import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';
import twitter from './img/twitter.png';

import getAllNews from "./getAllNews";
import renderNews from "./render/renderNews";



const window = () => {
  const main = document.querySelector(".main");
  const header = document.querySelector(".header");
  const title = document.querySelector(".title");
  const content = document.querySelector(".content");
  const menu = document.querySelector(".menu");
  const footer = document.querySelector(".footer");
  const category = document.querySelector(".category");
  const news_content = document.querySelector(".news_content");
  const socialMedia = document.querySelector(".socialMedia");

  // создаются элементы меню
  const menu_home = document.createElement("div");
  const menu_obout_us = document.createElement("div");
  const menu_gallery = document.createElement("div");

  // Добавляется контент в кнопки меню
  title.textContent = "NEWS";
  menu_home.textContent = "HOME";
  menu_obout_us.textContent = "ABOUT US";
  menu_gallery.textContent = "GALLERY";

  // Добавлен стиль ко всем кнопком
  title.classList.add("title-style");
  menu_home.classList.add("menu-style");
  menu_obout_us.classList.add("menu-style");
  menu_gallery.classList.add("menu-style");

  menu.append(menu_home, menu_obout_us, menu_gallery);

  // Добавление иконок для социальных сетей

  const facebookDiv = document.createElement("div");
  facebookDiv.classList.add("socialDiv")
  const facebookSrc = document.createElement("img");
  facebookSrc.src = facebook;
  facebookSrc.classList.add("socialMedia-style");

  const instagramDiv = document.createElement('div')
  instagramDiv.classList.add("socialDiv")
  const instagramSrc = document.createElement("img");
  instagramSrc.src = instagram;
  instagramSrc.classList.add("socialMedia-style");

  const linkedinDiv = document.createElement('div')
  linkedinDiv.classList.add("socialDiv")
  const linkedinSrc = document.createElement("img");
  linkedinSrc.src = linkedin;
  linkedinSrc.classList.add("socialMedia-style");

  const twitterDiv = document.createElement('div')
  twitterDiv.classList.add("socialDiv")
  const twitterSrc = document.createElement("img");
  twitterSrc.src = twitter;
  twitterSrc.classList.add("socialMedia-style");

  // Добавление социальных  сетей в DIV
  facebookDiv.append(facebookSrc);
  instagramDiv.append(instagramSrc);
  linkedinDiv.append(linkedinSrc);
  twitterDiv.append(twitterSrc);

  socialMedia.append(facebookDiv, instagramDiv, linkedinDiv, twitterDiv);

  menu_home.addEventListener('click', () => {
    renderNews();
  })

  
};

window();
getAllNews();
// getComments();
