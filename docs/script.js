document.getElementById("instagram").addEventListener("mouseover", instagramOver);
document.getElementById("twitter").addEventListener("mouseover", twitterOver);
document.getElementById("facebook").addEventListener("mouseover", facebookOver);
document.getElementById("instagram").addEventListener("mouseleave", instagramLeave);
document.getElementById("twitter").addEventListener("mouseleave", twitterLeave);
document.getElementById("facebook").addEventListener("mouseleave", facebookLeave);
const instagram = document.getElementById("instagram");
const twitter = document.getElementById("twitter");
const facebook = document.getElementById("facebook");

function instagramOver () {
  instagram.src = "assets/images/instagram-hover.png"
}

function instagramLeave () {
  instagram.src = "assets/images/instagram-logo.png"
}

function twitterOver () {
  twitter.src = "assets/images/twitter-hover.png"
}

function twitterLeave () {
  twitter.src = "assets/images/twitter-logo.png"
}

function facebookOver () {
  facebook.src = "assets/images/facebook-hover.png"
}

function facebookLeave () {
  facebook.src = "assets/images/facebook-logo.png"
}

function submit () {
  const email = document.getElementById("email");
  const result = document.getElementById("submit-msg");
  let pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  if (pattern.test(email.value)) {
    result.textContent = "You have successfully submitted";
    result.style.color = "#62E0D9"
  } else {
    result.textContent = "Error, please check your email";
    result.style.color = "#FF4242"
  }
}


