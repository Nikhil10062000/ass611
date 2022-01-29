var form = document.querySelector(".form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirm = document.getElementById("confirm-password");

form.addEventListener("submit", submitForm);

function submitForm(geek) {
  geek.preventDefault();

  checkUserName(username);
  checkEmail(email);
  checkPassword(password);
  checkConfirmPassword(passwordConfirm);
}



function checkUserName(element) {
  var nameOfUser = element.value;
  if (nameOfUser === "") {
    setError(element, "User name cannot be empty");
  } else {
    onSuccess(element , );
  }
}

function checkEmail(element) {
  var emailValue = element.value;
  if (emailValue === "") {
    setError(element, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(element, "This is not a valid email");
  } else {
    onSuccess(element );
  }
}

function checkPassword(element) {
  var sc = ["@", "@","(", "#"];
  var passwordValue = element.value;
  for( i=0; i< sc.length ; i++) {
  //   if(!passwordValue.includes(sc[i])) {
  //     setError(element, "above pass is missing this following : * ,@,#");
  //     console.log(sc);
  //  } 
     if(!passwordValue.includes(sc[0])) {
        setError(element, "above pass is missing this following : ( ");
     } 
     else if(!passwordValue.includes(sc[1])){
      setError(element, "above pass is missing this following : @  ");
     }
     else if(!passwordValue.includes(sc[2])){
      setError(element, "above pass is missing this following :   # ");
     }
     else if (passwordValue === "") {
        setError(element, "how it can be empty? #error!");
     }
     else {
        onSuccess(element); 
     }
  }   
}

function checkConfirmPassword(element) {
  var passwordValue = password.value;
  var confirmPasswordValue = element.value;
  if (confirmPasswordValue === "") {
    setError(element, "confirm password cannot be empty");
  } else if (passwordValue !== confirmPasswordValue) {
    setError(element, "passwords do not match");
  } else {
    onSuccess(element);
  }
}


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setError(element, errorMessage) {
  var formControl = element.parentElement;
  formControl.className = "form-control failure";
  formControl.querySelector("small").innerText = errorMessage;
}

function onSuccess(element , ) {
  var formControl = element.parentElement;
  formControl.className = "form-control success";
  
}

username.addEventListener("change", (e) => console.log(e.target.value))
