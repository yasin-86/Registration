const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.querySelector("#fullName").value;
  const password = document.querySelector("#password").value;
  const birthday = document.querySelector("#birthday").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const description = document.querySelector("#textarea").value;

  if (!fullName || !password || !birthday || !email || !phone || !description) {
    alert("Please fill out all required fields.");
    return;
  }

  const userInfo = {
    Fullname: fullName.toLowerCase(),
    Password: password,
    Birthday: birthday,
    Email: email.toLowerCase(),
    Phone: phone,
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

fullName.addEventListener("blur", (e) => {
  let value = e.target.value;
  if (/\d/.test(value)) {
    alert("you can not use number for fullname input");
  } else if (value.length < 6) {
    alert("invalid fullName");
  }
});

password.addEventListener("blur", (e) => {
  if (e.target.value.length < 8) {
    alert("invalid password");
  }
});

phone.addEventListener("blur", (e) => {
  if (e.target.value.length < 11) {
    alert("invalid numberPhone");
  }
});

birthday.addEventListener("blur", (e) => {
  let selectedDate = new Date(document.getElementById("birthday").value);
  let selectedYear = selectedDate.getFullYear();

  if (selectedYear <= 1975 || selectedYear > 2025) {
    alert("invalid age");
  }
});



