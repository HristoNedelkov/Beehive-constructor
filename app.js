import { uploadComment } from "./comments";



const btn = document.querySelector('#btn-comments');
const letsStartBtn = document.querySelector("#letsStart");

letsStartBtn.addEventListener("click", (e) => {
  window.scroll({
    top: 640,
    left: 0,
    behavior: "smooth",
  });
});

//form comments

btn.addEventListener('click', (e) => {
  const name = document.querySelector('#name-comments').value;
  const email = document.querySelector('#email-commetns').value;
  const message = document.querySelector('#message-comments').value;

  uploadComment({ name, email, message })
})