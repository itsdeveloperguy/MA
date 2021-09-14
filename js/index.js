console.clear()
function dev(){
    var developercheak = document.getElementById("developercheak").value;
    var devname = document.getElementById("devname");
    if(developercheak == "Mohd.Anas"){
        alert("You are now a developer")
        devname.innerHTML = "You are now a developer";
        document.getElementById("book").style.display = "block";
    document.getElementsByClassName("developer")[0].style.display = "none";
    }
    else if(developercheak == "Monica Chopra"){
        alert("You are a teacher");
    devname.innerHTML =
      "WELCOME ! <br> To the Teachers Mode. You have a valid Teacher certificate";
    document.getElementsByClassName("developer")[0].style.display = "none";
    document.getElementById("book").style.display = "block";
    }
    else if (developercheak == "Ravish"){
        alert("!! You are a Khamba !! ");
    devname.innerHTML = " <h1>WELCOME ! </h1> <br> To the Students Mode. You are a fake developer 😂😂🤣🤣";
    document.getElementsByClassName("developer")[0].style.display = "none";
    }
    else if (developercheak == "Books"){
        document.getElementById("book").style.display = "block";
        document.getElementsByClassName("developer")[0].style.display = "none";
    devname.innerHTML = "Books links are Created <h2>Sucessfully !! </h2>";
    }
    else if (developercheak == "books"){
      document.getElementById("book").style.display = "block";
      document.getElementsByClassName("developer")[0].style.display = "none";
  devname.innerHTML = "Books links are Created <h2>Sucessfully !! </h2>";
  }
    else if (developercheak == ""){
        console.log("Cheaking...")
        alert("Please Enter your name");
        document.getElementsByClassName("developer")[0].innerText = "Try again";
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

function size(){
if (document.getElementById("developercheak").style.width == "30vw"){
    var size = document.getElementById("developercheak");
    document.getElementById("developercheak").style.width = "20vw";
}
