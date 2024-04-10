import { getAllComments, uploadComment } from "./comments.js";
 
const btn = document.querySelector("#btn-comments");
const letsStartBtn = document.querySelector("#letsStart");

(async () => {
  const allComments = await getAllComments();
  const res = await Object.values(allComments.val());
  for (const el of Array.from(res)) {
    const { name, email, message } = el;
    postComment(name, email, message);
  }
})();
 

letsStartBtn.addEventListener("click", (e) => {
  window.scroll({
    top: 640,
    left: 0,
    behavior: "smooth",
  });
});

//form comments

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name-comments").value;
  const email = document.querySelector("#email-comments").value;
  const message = document.querySelector("#message-comments").value;

  uploadComment({ name, email, message });
});
