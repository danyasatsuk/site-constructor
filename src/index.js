import {toLocalStorage, editBlockContent} from './utils.js';
import { model } from './model.js';
import {Site} from './classes/site.js';
import {Sidebar} from './classes/sidebar.js';
// import {EditBlock} from './classes/editblock.js';
import './styles/main.css';

const site = new Site('#site');

const updateCallback = newBlock => {
    model.push(newBlock);
    toLocalStorage(model);
    site.render(model);
}

new Sidebar('#panel', updateCallback);

site.render(model);

document.addEventListener('click', event => {
    if(!event.target.classList.contains('block-content')) return;

    const block = event.target;

    editBlockContent(block);
});



