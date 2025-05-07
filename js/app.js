const form = document.querySelector("form");
const firstname = document.querySelector("#firstname")
const lastname = document.querySelector("#lastname")
const password = document.querySelector("#password")
const birthday = document.querySelector("#birthday")


form.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    const userInfo = {
        firstname: document.querySelector("#firstname").value, 
        lastname: document.querySelector("#lastname").value,
        password: document.querySelector("#password").value,
        birthday: document.querySelector("#birthday").value, 
        email: document.querySelector("#email").value, 
    };

    console.log(userInfo);


});

firstname.addEventListener("blur",(e)=>{
    if(e.target.value.length < 3){
        alert("invalid firstname")
    }
})

lastname.addEventListener("blur",(e)=>{
    if(e.target.value.length < 5){
        alert("invalid lastname")
    }
})

password.addEventListener("blur",(e)=>{

    if(e.target.value.length < 8){
        alert("invalid password")
    }
})
