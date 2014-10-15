```js
_.templateSettings.interpolate = /{([\s\S]+?)}/g;
```

var someHTMLString = [
     "<img src='{avatar_url}'>",
].join("");

function writeToDOM(data) {
    document.body.innerHTML = _.template(someHtmlString, data);
}

$.getJSON("https://api.github.com/users/warnerp18").then(function(data){
    console.log(data);
})
