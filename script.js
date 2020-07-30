'use strict';

const num = 108;
const answer = 32

for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    if(i === answer) {
        div.textContent = "侮"
        div.classList.add("win")
    } else {
        div.textContent = "悔"
        div.classList.add("lose")
    }

    div.addEventListener('click', () => {
        if(i === answer) {
            div.textContent = "Win"
            div.classList.add('Win');
        } else {
            div.classList.add('Lose');
        }
    });

    document.body.appendChild(div);
}