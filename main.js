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
         messagesData += `<div class="col-3" id="blogContainer">
         <nav class="blogNav">
           <h3> ${blogItem.week}:</h3>
           <h4> ${blogItem.date}: </h4>
         </nav>
          <p class="blogP"> ${blogItem.content}</p>
          </div>`
    };
    blogDiv.innerHTML = messagesData;
    console.log("some messages for you :)")
}

dataBlog.open("GET", "blogPost.json");
dataBlog.send();

$(function() {
    var header = $(".nav-wrapper");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});