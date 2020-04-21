var mainApp = {};

(function() {
  var firebase = app_firebase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
    } else {
      // Redirect to login page
      uid = null;
      window.location.replace("login.html");
    }
  });

  function logOut() {
    firebase.auth().signOut();
  }

  mainApp.logOut = logOut;
})();

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, { dist: -80, fullWidth: true });
});
