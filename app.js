
console.log("hello");

//let myHTML = `<h3>${project.title}</h3>`;
// with more for the other pieces of data you have about your project
$(document).ready(function(){



let myProjects = [
{
name: "ProjectA", 
image: "tba",
link: "tba"
},
{
name: "ProjectB", 
image: "tba",
link: "tba"
},
{
name: "Memory Game", 
image: "tba",
link: "///Users/Patrick/fundamentals/wdi-fundamentals-memorygame2/index.html"
}
];

for (var i=0; i<myProjects.length;i++) {
	var projectText = "<a class='dropdown-item' href='#'>" + myProjects[i].name + '</a>';
	$("#dropdown-menu").append(projectText);
}

});
