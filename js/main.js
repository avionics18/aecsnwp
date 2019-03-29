//Remove show() class from Admin Menu when 767px 
var collapseMenu = document.getElementsByClassName("collapseMenu");


if (screen.width < 768) {
	for(let i = 0 ; i < collapseMenu.length ; i++ ){
		collapseMenu[i].classList.remove("show");
	}
}

//add .active class to the menu when clicked
var menuItems = document.querySelectorAll(".sidebar > .list-group > div > .list-group-item");

for(var i = 0, length1 = menuItems.length; i < length1; i++){
	console.log(menuItems[i].innerHTML);
}

