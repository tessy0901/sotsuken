'use strict';
const analytics = firebase.analytics();

const num = 108;
const answer = 32

for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    if(i === answer) {
        div.textContent = "侮"
        div.classList.add("正解")
    } else {
        div.textContent = "悔"
        div.classList.add("不正解")
    }

    div.addEventListener('click', () => {
        if(i === answer) {
            div.textContent = "正解"
            div.classList.add('正解');
        } else {
            div.classList.add('不正解');
        }
    });

    document.body.appendChild(div);
}