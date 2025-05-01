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

// Registration form handling
document.querySelector(".auth-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = this.querySelector('input[type="text"]')?.value;
  const email = this.querySelector('input[type="email"]')?.value;
  const password = this.querySelector('input[type="password"]')?.value;
  const checkbox = this.querySelector('input[type="checkbox"]')?.checked;

  if (!name || !email || !password || !checkbox) {
    alert("Lūdzu, aizpildiet visus laukus un piekrītiet noteikumiem!");
  } else {
    alert("Reģistrācija veiksmīga!");
    window.location.href = "autorizācija lapai.html";
  }
});

// Password reset link
document.querySelector('a[href="#"]')?.addEventListener('click', function(event) {
  event.preventDefault();
  alert("Atvainojamies, vēl šī funkcija nav pieejama.");
});



function toggleForms() {
  const login = document.getElementById("login-form");
  const register = document.getElementById("register-form");
  login.classList.toggle("hidden");
  register.classList.toggle("hidden");
}