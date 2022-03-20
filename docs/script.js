function submit () {
  const email = document.getElementById("email");
  const result = document.getElementById("submit-msg");
  let pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  if (pattern.test(email.value)) {
    result.textContent = "You have successfully submitted";
  } else {
      result.textContent = "Error, please check your email";
  }
}
