function dev() {
  var developercheak = document.getElementById("developercheak").value;
  var devname = document.getElementById("devname");
  if (devname == "You are now a developer") {
    alert("No need you are already a developer");
  } else if (developercheak == "Mohd.Anas") {
    alert("Switched to developer Mode");
    devname.innerHTML = "You are now a developer";
    document.getElementsByClassName("developer")[0].style.display = "none";
  } else if (developercheak == "Monica") {
    alert("You are a teacher");
    devname.innerHTML =
      "WELCOME ! <br> To the Teachers Mode. You have a valid Teacher certificate";
    document.getElementsByClassName("developer")[0].style.display = "none";
    document.getElementById("book").style.display = "block";
  } else if (developercheak == "Ravish") {
    alert("!! You are a Khamba !! ");
    devname.innerHTML = "WELCOME Ravish ! <br> Your are a student and a fake developer.";
    document.getElementsByClassName("developer")[0].style.display = "none";
  } else if (developercheak == "books") {
    document.getElementById("book").style.display = "block";
    devname.innerHTML = "Books links are Created <h2>Sucessfully !! </h2>";
  } else if (confirm("Are you sure you want to switch beta version")) {
    alert("Please Enter your name");
    document.getElementsByClassName("developer")[0].innerText = "Try again";
  }
}
function search() {
  // document.getElementById("developercheak").style.width = "30vw"
  var size = document.getElementById("developercheak");
  if (document.getElementById("developercheak").style.width == "20vw") {
    document.getElementById("developercheak").style.width = "30vw";
  } else {
    document.getElementById("developercheak").style.width = "20vw";
  }
}
