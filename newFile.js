document.querySelector('input[name="remember-me"]').addEventListener('change', function() {
    if (this.checked) {
        alert("Tavs lietotājvārds tiks atcerēts!");
    } else {
        alert("Tavs lietotājvārds netiks atcerēts.");
    }


    
});
