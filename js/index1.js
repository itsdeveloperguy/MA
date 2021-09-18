console.clear();
function dev() {
  var developercheak = document.getElementById("developercheak").value;
  var devname = document.getElementById("devname");
  if (developercheak == "Mohd.Anas") {
    alert("You are now a developer");
    devname.innerHTML = "You are now a developer";
    document.getElementById("book").style.display = "block";
    document.getElementsByClassName("developer")[0].style.display = "none";
  } else if (developercheak == "Monica Chopra") {
    alert("You are a teacher");
    devname.innerHTML =
      "WELCOME ! <br> To the Teachers Mode. You have a valid Teacher certificate";
    document.getElementsByClassName("developer")[0].style.display = "none";
    document.getElementById("book").style.display = "block";
  } else if (developercheak == "Ravish") {
    alert("!! You are a Khamba !! ");
    devname.innerHTML =
      " <h1>WELCOME ! Ravish </h1> <br>You are a fake developer..";
    document.getElementsByClassName("developer")[0].style.display = "none";
  } else if (developercheak == "Books") {
    document.getElementById("book").style.display = "block";
    document.getElementsByClassName("developer")[0].style.display = "none";
    devname.innerHTML = "Books links are Created <h2>Sucessfully !! </h2>";
  } else if (developercheak == "books") {
    document.getElementById("book").style.display = "block";
    document.getElementsByClassName("developer")[0].style.display = "none";
    devname.innerHTML = "Books links are Created <h2>Sucessfully !! </h2>";
  } else if (developercheak == "book") {
    document.getElementById("book").style.display = "block";
    document.getElementsByClassName("developer")[0].style.display = "none";
    devname.innerHTML = "Books links are Created <h2>Sucessfully !! </h2>";
  } else if (developercheak == "books") {
    document.getElementById("book").style.display = "block";
    document.getElementsByClassName("developer")[0].style.display = "none";
    devname.innerHTML = "Books links are Created <h2>Sucessfully !! </h2>";
  } else if (developercheak == "") {
    console.log("Cheaking...");
    alert("Sorry! we could not fine any registed elements");
    document.getElementsByClassName("developer")[0].innerText = "Try again";
    devname.innerHTML = "Try Again... </h2>";
  } else {
    alert("Make sure you spell correct");
    devname.innerHTML = "please wait.. Cheaking <br> <h2>wait for a 5 sec</h2>";
    setTimeout(
      (cheak = () => {
        console.log("alert");
        alert("try again");
        devname.innerHTML =
          "<h3>Contact: </h3><br> <h2>mohmmadanas7347@outlook.com</h2>";
      }),
      5000
    );
  }
}
function search() {
  var size = document.getElementById("developercheak");
  if (document.getElementById("developercheak").style.width == "20vw") {
    document.getElementById("developercheak").style.width = "30vw";
  } else {
    document.getElementById("developercheak").style.width = "20vw";
  }
}

var body = document.getElementById("body");
body.addEventListener("click", function () {
  if (document.getElementById("developercheak").style.width == "30vw") {
    document.getElementById("developercheak").style.width = "20vw";
  }
});
var th = document.getElementById("developercheak");
th.addEventListener("click", function () {
  devname.innerHTML = "<h2>Special Thanks to Monica Chopra</h2>";
});
