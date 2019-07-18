var app = require('../app');

const $ = (id) => {
    return document.getElementById(id);
}

window.onload = () => {
    $('btn_on').onclick = on;
    $('btn_off').onclick = off;
}

const on = () => {
}

const off = () => {
}

