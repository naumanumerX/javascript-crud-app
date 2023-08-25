let addEmp=document.querySelector(".add-Emp");
let modal=document.querySelector(".modal");
let closeBtn=document.querySelector(".close-icon")
addEmp.addEventListener("click",()=>{

    modal.classList.add("active")

})
closeBtn.addEventListener("click",()=>{
    modal.classList.remove("active")

})
// Global variables
let regBtn=document.querySelector("#register-btn");
let id=document.querySelector("#id");
let fname=document.querySelector("#fname");
let lname=document.querySelector("#lname");
let ni=document.querySelector("#ni");
let address=document.querySelector("#address");
let email=document.querySelector("#email");
let userInformation=[]; // This aray will save data to local storage
let userData=[];// This array will get data from local storage
let formRegistration=document.querySelector("#form-registration");

//End of Global varaibales

//Register Code

regBtn.onclick=function(e){
    e.preventDefault();
    registrationData();
    formRegistration.reset(' ');
    closeBtn.click();

}
if(localStorage.getItem("User Data")!= null)
{
userData=JSON.parse(localStorage.getItem("User Data"));

}
console.log(userData);  

const registrationData= ()=>{
    userInformation.push({
        id:id.value,
        fname:fname.value,
        lname:lname.value,
        ni:ni.value,
        address:address.value,
        email:email.value

    })
    
  const userDataString=JSON.stringify(userInformation);
  console.log(userDataString);
  localStorage.setItem("User Data",userDataString);
}