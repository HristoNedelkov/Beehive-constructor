import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import emailjs from "https://cdn.skypack.dev/@emailjs/browser";
import {
  getDatabase,
  set,
  ref,
  child,
  push,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
const firebaseConfig = {
  apiKey: "",// YOU NEED TO ADD THIS TO USE FIREBASE!!!
  authDomain: "jana-vector-and-graph.firebaseapp.com",
  databaseURL: "https://jana-vector-and-graph-default-rtdb.firebaseio.com",
  projectId: "jana-vector-and-graph",
  storageBucket: "jana-vector-and-graph.appspot.com",
  messagingSenderId: "6395513197",
  appId: "1:6395513197:web:70450612dbe7ed1eabb264",
};

 

const dbRef = getDatabase();

//const commentsRef = ref(dbRef, "comments");
export function uploadComment({ name, email, message }) {
  // const newPostRef = push(commentsRef);

  const serviceID = "service_4dhm85f";
  const templateID = "template_d3niw1s";
  emailjs.init("QkQM3bAxeRcLBV9Af");

  const form = document.querySelector("form");

  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      alert("Благодаря, че се свързахте с нас! Ще се свържем с вас в най-кратък срок! :)");
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
}

export function getAllComments() {
  return get(ref(dbRef, "comments"));
}
