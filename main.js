"use strict";
console.log("hola");

let dataBlog = new XMLHttpRequest();

dataBlog.addEventListener("load", dataRequestComplete);
dataBlog.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event) {
    console.log("it loaded");
    let moreData = JSON.parse(event.target.responseText);
    console.log("moreData", moreData.blogPosts);
    showData(moreData.blogPosts);
}
function dataRequestFailed(event){
    console.log("failed to load", event);
}
function showData(taco){
    let blogDiv = document.getElementById("post-here");
    console.log("here", blogDiv);
    let messagesData = '';
    let item;
    for(item in taco){
        console.log("item",item);
        let blogItem = taco[item];
         messagesData += `<div class="col-3" id="blogContainer"><h3> ${blogItem.week}:</h3><h4> ${blogItem.date}: </h4> <p> ${blogItem.content}</p></div>`
    };
    blogDiv.innerHTML = messagesData;
    console.log("some messages for you :)")
}

dataBlog.open("GET", "blogPost.json");
dataBlog.send();