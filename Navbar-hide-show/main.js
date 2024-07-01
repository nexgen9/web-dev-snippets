let lastScrollTop=0;
navbar=document.getElementById("navbar");
window.addEventListener("scroll",()=>{
    let scrollTop=window.pageYOffset || document.documentElement.scrollTop;
 if(scrollTop>lastScrollTop){
    navbar.classList.add("active");
 }else{
    navbar.classList.remove("active");
 }
lastScrollTop=scrollTop;


})