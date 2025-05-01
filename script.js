
// Image switching function
function mainitAttelu(imgElement, newSrc) {
  const originalSrc = imgElement.getAttribute('src');
  const currentSrc = imgElement.src;
  
  if (currentSrc.includes(newSrc)) {
    imgElement.src = originalSrc;
  } else {
    imgElement.src = newSrc;
  }
}

// Form submission handling
document.querySelector("#login-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = this.querySelector('input[type="text"]')?.value;
  const password = this.querySelector('input[type="password"]')?.value;

  if (!username || !password) {
    alert("Lūdzu, ievadiet gan lietotājvārdu, gan paroli!");
  } else {
    alert("Esi veiksmīgi pieslēdzies!");
  }
});



// Password reset link
document.querySelector('.links a')?.addEventListener('click', function(event) {
  event.preventDefault();
  alert("Paroles atjaunošanas iespēja vēl nav pieejama.");
});



function toggleForms() {
  const login = document.getElementById("login-form");
  const register = document.getElementById("register-form");
  login.classList.toggle("hidden");
  register.classList.toggle("hidden");
}