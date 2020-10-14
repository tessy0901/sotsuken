'use strict';
const analytics = firebase.analytics();

const num = 77;
const answer = 19

for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    if(i === answer) {
        div.textContent = "巳"
        div.classList.add("success")
    } else {
        div.textContent = "已"
        div.classList.add("fail")
    }

    div.addEventListener('click', () => {
        if(i === answer) {
            div.textContent = "正解"
            window.location.href = 'therd.html';
            //analytics.logEvent('select_content');
        } else {
            div.textContent = "不正解"
        }
    });

    document.body.appendChild(div);
}

