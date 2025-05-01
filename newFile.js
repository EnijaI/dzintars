document.querySelector('input[name="remember-me"]').addEventListener('change', function() {
    if (this.checked) {
        alert("Tavs lietotājvārds tiks atcerēts!");
    } else {
        alert("Tavs lietotājvārds netiks atcerēts.");
    }


    function mainitAttelu(imgElement, newSrc) {
        const originalSrc = imgElement.src;

        imgElement.onclick = function() {
            if (imgElement.src.includes(newSrc)) {
                imgElement.src = originalSrc;
            } else {
                imgElement.src = newSrc;
            }
        };

        // Uzreiz iestata pirmo klikšķi (uz jauno bildi)
        imgElement.onclick();
    }
});
