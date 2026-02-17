// Toggle menu for mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill in all fields!";
    return;
  }

  if (!email.includes("@")) {
    formMsg.style.color = "red";
    formMsg.textContent = "Enter a valid email address!";
    return;
  }

  formMsg.style.color = "lightgreen";
  formMsg.textContent = "Thank you! Your message has been sent successfully.";
  document.getElementById("contactForm").reset();
});
