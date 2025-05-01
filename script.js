
// Image switching function
function mainitAttelu(imgElement, newSrc) {
  const originalSrc = imgElement.src;
  
  if (imgElement.src.includes(newSrc)) {
    imgElement.src = originalSrc;
  } else {
    imgElement.src = newSrc;
  }
}

// Form submission handling
document.querySelector("form")?.addEventListener("submit", function(event) {
  const username = document.querySelector('input[name="username"]')?.value;
  const password = document.querySelector('input[name="password"]')?.value;

  if (!username || !password) {
    event.preventDefault();
    alert("Lūdzu, ievadiet gan lietotājvārdu, gan paroli!");
  }
});

// Welcome message
window.onload = function() {
  alert("Laipni lūdzam mūsu mājaslapā!");
};

// Password reset link
document.querySelector('.links a')?.addEventListener('click', function(event) {
  event.preventDefault();
  alert("Paroles atjaunošanas iespēja vēl nav pieejama.");
});
