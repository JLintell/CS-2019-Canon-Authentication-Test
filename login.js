var optionBox = document.getElementById("optionBox");
var loginBox = document.getElementById("loginBox");
var signupBox = document.getElementById("signupBox");
var register = document.querySelector(".signup");
var login = document.querySelector(".login");
var signout = document.querySelector(".signout");

function hider(option) {
  optionBox.style.visibility = "hidden";
  if (option == "login") {
    loginBox.style.visibility = "visible";
    signupBox.style.visibility = "hidden";
  } else {
    loginBox.style.visibility = "hidden";
    signupBox.style.visibility = "visible";
  }
}

/*Register*/
register.addEventListener("submit", e => {
  e.preventDefault();
  const email = register.email.value;
  const password = register.password.value;
  const username = register.username.value;

  firebase.auth().createUserWithEmailAndPassword(email, password);

  async function checkUser() {
    await firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        user.updateProfile({
          displayName: username
        });
      }
    });
  }
  checkUser();
});

/*Login*/
login.addEventListener("submit", e => {
  e.preventDefault();
  const email = login.email.value;
  const password = login.password.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      login.reset();
      window.location.replace("main.html");
    })
    .catch(e => {
      login.querySelector(".error").textContent = e.message;
    });
});

/*User state*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    login.classList.add("hidden");
    register.classList.add("hidden");
    signout.classList.remove("hidden");
  } else {
    login.classList.remove("hidden");
    register.classList.remove("hidden");
    signout.classList.add("hidden");
  }
});