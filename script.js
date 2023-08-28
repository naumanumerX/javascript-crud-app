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
let imageUrl;
//End of Global varaibales

//Register Code

formRegistration.onsubmit=function(e){
    e.preventDefault();
    registrationData();

    getDataFromLocalStorage();
 userInformation = [];

    formRegistration.reset(' ');
    closeBtn.click();


}
if(localStorage.getItem("User Data")!= null)
{
userData=JSON.parse(localStorage.getItem("User Data"));

}
console.log(userData);  

const registrationData= ()=>{
    userData.push({
        id:id.value,
        fname:fname.value,
        profilepic: imageUrl==undefined ?"images/avatar.jpg":imageUrl,
        ni:ni.value,
        address:address.value,
        email:email.value

    })
    
  const userDataString=JSON.stringify(userInformation);
  console.log(userDataString);
  localStorage.setItem("User Data",userDataString);
}
  
const tableData = document.querySelector("#table-data");

const getDataFromLocalStorage = () => {
    tableData.innerHTML=" ";
  userData.forEach((data,index) => {
    tableData.innerHTML += `

        <tr index='{index}'>
            <td>${index+1}</td>
            <td>${data.fname}</td>
            <td><img src="${data.profilepic}" width="40px" height="40px"></td>
            
            <td>${data.ni}</td>
            <td>${data.address}</td>
            <td>${data.email}</td>  
            
            <td>
            <button><i class="fa fa-eye"></i></button>
            <button style="background-color: rgb(150, 31, 31);"><i class="fa fa-trash"></i></button></td>
       

            </td>  
</tr>
        `;
  });
};
getDataFromLocalStorage();
    
// users can upload  image
var profile_pic=document.querySelector("#profile-pic");
var upload_pic=document.querySelector("#upload-field");
upload_pic.addEventListener("change", function() {
    if(upload_pic.files[0].size < 1000000){

        let fReader=new FileReader();
        fReader.onload= function(e){
             imageUrl=e.target.result;
            profile_pic.src=imageUrl;
            //console.log(imageUrl);
        }
        fReader.readAsDataURL(upload_pic.files[0])

    }
    
    else{
        console.log("Error : Please upload a picture that is less than 1Mb");
    }
});