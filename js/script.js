// ===============================
// Mobile Menu
// ===============================

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show-menu");
    });
}

// ===============================
// Product Search
// ===============================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach((card) => {

            let productName = card.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}