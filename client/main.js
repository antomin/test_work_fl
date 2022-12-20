const inputTextElem = document.getElementById('input-text');
const inputBtnElem = document.getElementById('input-btn');
const msgListElem = document.getElementById('messages-list');

inputBtnElem.onclick = (event) => {
    event.preventDefault();
    let newLiElem = document.createElement('li');
    newLiElem.innerText = inputTextElem.value;
    msgListElem.appendChild(newLiElem)
    inputTextElem.value = '';
}
