_.templateSettings.interpolate = /{([\s\S]+?)}/g;


var someHtmlString = [
	"<div 'class=sidebar'>",
        "<img src='{avatar_url}'>",
        "<h3>{name}</h3>",
        "<ul>",
            "<li> Blog: {html_url} </li>",
            "<li> Location: {location} </li>",
            "<li> Email: {email} </li>",
        "</ul>",
    "</div>",
    "<div>",
    	"<ul>",
    		"<li><a href='html_url'> Contributions </a><li>",
    		"<li><a href='{repo_url}'> Repositories </a><li>",
    		"<li> </li>",
    	"</ul>",
    "</div>"
    ].join("");

function writeToDOM(data){
    document.body.innerHTML = _.template(someHtmlString, data);
}

$.getJSON("https://api.github.com/users/warnerp18").then(writeToDOM);