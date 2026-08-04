const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const events = [
  "24 серпня 1991 року Верховна Рада України проголосила незалежність України.",
  "22 січня 1919 року було проголошено Акт Злуки УНР і ЗУНР.",
  "28 червня 1996 року Верховна Рада ухвалила Конституцію України.",
  "1 грудня 1991 року українці на референдумі підтвердили незалежність України.",
  "14 жовтня в Україні відзначають День захисників і захисниць України."
];

const eventText = document.querySelector("#daily-event");
const eventButton = document.querySelector("#event-button");

eventButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * events.length);
  eventText.textContent = events[randomIndex];
});

document.querySelector("#year").textContent = new Date().getFullYear();
/* ==========================
   Темна тема
========================== */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

}
