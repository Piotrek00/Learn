// load event, innerHTML

function setContentToHtml(id, content) {
  let div = document.getElementById(id);
  console.log(div);
  div.innerHTML = content;
}

//zdarzenie load jest wywolane jesli załadowane sa obrazki kod itp.
window.addEventListener("load", function () {
  console.log("load event");
  setContentToHtml("content1", "Hello World!!!");
});

window.onload = function () {
  console.log("On load event");
  setContentToHtml("content2", "hello");
};

// let div = document.getElementById("content");
// div.innerHTML = "<b>Hello</>";
