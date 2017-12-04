
console.log("js running");

//let myHTML = `<h3>${project.title}</h3>`;
// with more for the other pieces of data you have about your project
$(document).ready(function(){

let myProjects = [
{
name: "Project A", 
image: "https://lh4.ggpht.com/bTBZkXZteZNIPw9dRdVzKyYpL8oo9R_ox3GyMcxm8vOCqJQQPk2Ne4NQFsMr49-f9b8=w300",
link: "///Users/Patrick/Desktop/Practicing%20Self%20Study%20Codes/jQuery%20Self%20Study%20Code.html"
},
{
name: "Project B", 
image: "https://lh4.ggpht.com/bTBZkXZteZNIPw9dRdVzKyYpL8oo9R_ox3GyMcxm8vOCqJQQPk2Ne4NQFsMr49-f9b8=w300",
link: "///Users/Patrick/Desktop/bootstraplab.html"
},
{
name: "Memory Game", 
image: "images/queen-of-hearts.png",
link: "///Users/Patrick/fundamentals/wdi-fundamentals-memorygame2/index.html"
}
];

for (var i=0; i<myProjects.length;i++) {
	var projectText = "<a class='dropdown-item' href='#'>" + myProjects[i].name + '</a>';
	$("#dropdown-menu").append(projectText);
}

});
