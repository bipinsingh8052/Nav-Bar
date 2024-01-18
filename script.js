const navbar= `
        <li><a href="#"> Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
`;
const navmenu =document.createElement("nav");
navmenu.classList.add("main-menu");
const unorderlist =document.createElement("ul");
unorderlist.classList.add("unoder_list");
unorderlist.innerHTML= navbar;
 
navmenu.append(unorderlist);


const container=document.querySelector(".containeer");
container.append(navmenu);
console.log(container);