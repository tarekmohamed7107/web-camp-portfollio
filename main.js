 // Dynamic sentence in the About Me section
const hobbiesList = document.querySelector("#about ul");
const dynamicSentence = document.createElement("p");
dynamicSentence.textContent = "I love creating visually stunning and user-friendly websites!";
hobbiesList.appendChild(dynamicSentence);

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth"
        });
    });
});