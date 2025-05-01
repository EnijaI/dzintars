document.querySelector("form").addEventListener("submit", function(event) {
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (!username || !password) {
    event.preventDefault(); // Aptur sūtīšanu
    alert("Lūdzu, ievadiet gan lietotājvārdu, gan paroli!");
  }
});
window.onload = function() {
  alert("Laipni lūdzam mūsu mājaslapā!");
};
document.querySelector('.links a').addEventListener('click', function(event) {

function mainitAttelu(imgElement, newSrc) {
  const originalSrc = imgElement.src;
  
  if (imgElement.src.includes(newSrc)) {
    imgElement.src = originalSrc;
  } else {
    imgElement.src = newSrc;
  }
}

  event.preventDefault();
  alert("Paroles atjaunošanas iespēja vēl nav pieejama.");
});
