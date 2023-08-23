let addEmp=document.querySelector(".add-Emp");
let modal=document.querySelector(".modal");
let closeBtn=document.querySelector(".close-icon")
addEmp.addEventListener("click",()=>{

    modal.classList.add("active")

})
closeBtn.addEventListener("click",()=>{
    modal.classList.remove("active")

})