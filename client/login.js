  var modal = document.getElementById('id01');
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");
  const loginErrorMsg = document.getElementById("login-error-msg");

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user1" && password === "1234") {
      window.open("https://script.google.com/macros/s/AKfycbydPiWEsC1rKEUgDpEb7jNHudrD44tEaKcZrzktVVeOpzWpMzufxuvfPKd_pOPbb4Jz/exec?v=form", "_blank");
    } else if (username === "user2" && password === "12345") {
      window.open("https://script.google.com/macros/s/AKfycbydPiWEsC1rKEUgDpEb7jNHudrD44tEaKcZrzktVVeOpzWpMzufxuvfPKd_pOPbb4Jz/exec?v=form", "_blank");
    } else {
      loginErrorMsg.style.opacity = 1;
    }
  })
