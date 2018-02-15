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
         messagesData += `<div><h3> ${blogItem.week}: ${blogItem.date}: ${blogItem.content}</h3></div>`
    };
    blogDiv.innerHTML = messagesData;
    console.log("some messages for you :)")
}

dataBlog.open("GET", "blogPost.json");
dataBlog.send();