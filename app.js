_.templateSettings.interpolate = /{([\s\S]+?)}/g;


var someHtmlString = [
	"<div class=sidebar>",
        "<img src='{avatar_url}'>",
        "<h3>{name}</h3>",
        "<ul>",
            "<li> Blog: {html_url} </li>",
            "<li> Location: {location} </li>",
            "<li> Email: {email} </li>",
            "<hr>",
        "</ul>",
    "</div>",
    "<div class=>",
    	"<ul id= selections>",
    		"<li class=tab><a href='{html_url}'> Contributions </a></li>",
    		"<li class=tab><a href='repo_url'> Repositories </a></li>",
    		"<li class=tab><a href='#'>  </a> Public Activity </li>",
    	"</ul>",
    	"<hr>",
    	"<ul>",
    		"<li class=repositories><a href='{html_url}'> Color Clock </a></li>",
    		"<hr>",
    		"<li class=repositories><a href='{html_url}'> Homework-Day17 </a></li>",
    		"<hr>",
    		"<li class=repositories><a href='{html_url}'> Github_Profile </a></li>",
    		"<hr>",
    		"<li class=repositories><a href='{html_url}'> Group Homework </a></li>",
    		"<hr>",
    		"<li></li>",
		"</ul>",

    	
    "</div>"
    ].join("");

function writeToDOM(data){
    document.body.innerHTML = _.template(someHtmlString, data);
}

$.getJSON("https://api.github.com/users/warnerp18").then(writeToDOM);