document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  const mobileNav = document.querySelector(".mobile-nav");
  const navLinks = document.querySelectorAll(".mobile-nav ul a");

  function closeMenu() {
    mobileNav.classList.remove("open");
  }

  menuToggle.addEventListener("click", function () {
    mobileNav.classList.toggle("open");
  });

  menuClose.addEventListener("click", function () {
    closeMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.addEventListener("click", function (event) {
    if (
      mobileNav.classList.contains("open") &&
      !mobileNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(
    ".mobile-nav ul a, .container-nav ul a"
  );

  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (
      href === currentPath ||
      (href === "/" && currentPath === "/index.html")
    ) {
      link.classList.add("current-page");
    }
  });
});

const text = "Kelvyn Reis";
const speed = 100;

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector(".typing-animation").style.display = "inline-block";
  }
}

setTimeout(typeWriter, 1000);
