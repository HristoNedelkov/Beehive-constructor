import emailjs from "https://cdn.skypack.dev/@emailjs/browser";

document.addEventListener("DOMContentLoaded", function () {
  const serviceID = "service_4dhm85f";
  const templateID = "template_d3niw1s";
  emailjs.init("QkQM3bAxeRcLBV9Af");
  
  const form = document.getElementById("feedback-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Change button text and disable it
    const btn = document.getElementById("btn-comments");
    btn.textContent = "Sending...";
    btn.disabled = true;

    // Add a simple CSS-based loading animation
    btn.classList.add("is-loading");

    // Send the email via EmailJS
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        alert(
          "Благодаря, че се свързахте с нас! Ще се свържем с вас в най-кратък срок! :)"
        );
        btn.textContent = "Submit"; // Change back the button text
        btn.disabled = false; // Enable the button
        btn.classList.remove("is-loading"); // Remove loading animation
      },
      (err) => {
        alert("Failed to send the feedback. Please try again.");
        btn.textContent = "Submit"; // Change back the button text
        btn.disabled = false; // Enable the button
        btn.classList.remove("is-loading"); // Remove loading animation
        console.error("EmailJS error:", err);
      }
    );
  });
});
