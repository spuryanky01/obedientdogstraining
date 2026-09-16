const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const contactForm = document.querySelector(".contact-form");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

contactForm.addEventListener("submit", (event) => {
  if (window.location.protocol !== "file:") {
    return;
  }

  event.preventDefault();
  const formData = new FormData(contactForm);
  const subject = encodeURIComponent("New enquiry from Obedient Dogs");
  const body = encodeURIComponent(
    `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nProgramme: ${formData.get("programme")}`,
  );
  window.location.href = `mailto:nettiedmendoza@gmail.com?subject=${subject}&body=${body}`;
  document.querySelector(".form-status").textContent =
    "Your email app should open with the enquiry ready to send.";
});
