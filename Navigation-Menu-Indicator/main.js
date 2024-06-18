const list =document.querySelectorAll(".list");
function activLink(){
    list.forEach((item)=>

        
        item.classList.remove("active"));
        this.classList.add("active");

}
list.forEach((item)=>
item.addEventListener("click",activLink))