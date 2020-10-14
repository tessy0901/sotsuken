'use strict';
const analytics = firebase.analytics();

const num = 77;
const answer = 55
//const startDate = Date.now()

for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    if(i === answer) {
        div.textContent = "候"
        div.classList.add("success")
    } else {
        div.textContent = "侯"
        div.classList.add("fail")
    }

    div.addEventListener('click', () => {
        if(i === answer) {
            div.textContent = "正解"
            const endDate = Date.now()
            //const selectDate = endDate - startDate
            //analytics.logEvent('select_content3', selectDate);
        } else {
            div.textContent = "不正解"
        }
    });

    document.body.appendChild(div);
}

