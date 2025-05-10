const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInfo = {
        Fullname: document.querySelector("#fullName").value.toLowerCase(),
        Password: document.querySelector("#password").value,
        Birthday: document.querySelector("#birthday").value,
        Email: document.querySelector("#email").value.toLowerCase(),
        Phone: document.querySelector("#phone").value,
        Description: document.querySelector("#textarea").value.trim().toLowerCase(),
    };
    console.log(userInfo);


    
    let userfullName = document.getElementById("fullName").value; 
    let userName = userfullName ? userfullName.split(" ")[0] : "";
    alert("Hello " + userName);

    if (userInfo.Description.includes("tehran")) {
        alert("Your product will reach you faster.");
      }
    
});

fullName.addEventListener("blur",(e)=>{
    if(e.target.value.length < 6){
        alert("invalid fullName")
    }
})

password.addEventListener("blur",(e)=>{

    if(e.target.value.length < 8){
        alert("invalid password")
    }
})

phone.addEventListener("blur",(e)=>{

    if(e.target.value.length < 11){
        alert("invalid numberPhone")
    }
})

birthday.addEventListener("blur",(e)=>{
    let selectedDate = new Date(document.getElementById("birthday").value);
    let selectedYear = selectedDate.getFullYear();

    if (selectedYear <= 1975) {
      alert("invalid age");
    }
})


