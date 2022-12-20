"use strict";

const inputTextElem = document.getElementById("input-text");
const inputBtnElem = document.getElementById("input-btn");
const msgListElem = document.getElementById("messages-list");

let ws = new WebSocket("ws://localhost:8000/ws");

inputBtnElem.onclick = (event) => {
    event.preventDefault();
    let data = JSON.stringify({
        "action": "echo_send",
        "message": inputTextElem.value
    });

    ws.send(data);

    inputTextElem.value = "";
}

ws.onmessage = (event) => {
    let data = JSON.parse(event.data);
    if (data["action"] === "answer") {
        let newLiElem = document.createElement("li");
        newLiElem.innerText = data["num"] + '. ' + data["message"];
        msgListElem.appendChild(newLiElem);
    }
}
