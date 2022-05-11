import { getDogs } from '../fetch-utils.js';

const dogNameElement = document.getElementById('pet');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const doggo = await getDogs(id);
    dogNameElement.textContent = doggo.name;
}
loadData();