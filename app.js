function  init(){
const hamburger = document.querySelector(".hamburger");
const sidebarclosebtn = document.querySelector(".close-button");
const sidebarcontainer = document.querySelector(".sidebar-container");

const opensidebar = () =>{
    sidebarcontainer.classList.add("show-sidebar");
};
const closesidebar = () =>{
    sidebarcontainer.classList.remove("show-sidebar");
};

hamburger.addEventListener("click", opensidebar);
sidebarclosebtn.addEventListener("click", closesidebar);
}
init();

function navrelatedcode(){
    const navbarcontainer = document.querySelector(".nav-container");
 window.addEventListener("scroll", function(){
    const scrollnumber = window.scrollY;
    const targetnumber = window.innerWidth >= 992 ? 100 : 95;
    if(scrollnumber >= targetnumber){
        navbarcontainer.classList.add("sticky-nav");
    }else{
        navbarcontainer.classList.remove("sticky-nav");
    }

});
}
navrelatedcode();