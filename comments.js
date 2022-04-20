import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  child,
  push,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyA-9hqU27gOOZTCM6VEuYtwEkbC6LI-sgo",
  authDomain: "jana-vector-and-graph.firebaseapp.com",
  databaseURL: "https://jana-vector-and-graph-default-rtdb.firebaseio.com",
  projectId: "jana-vector-and-graph",
  storageBucket: "jana-vector-and-graph.appspot.com",
  messagingSenderId: "6395513197",
  appId: "1:6395513197:web:70450612dbe7ed1eabb264",
};

initializeApp(firebaseConfig);
// Initialize Firebase

const dbRef = getDatabase();

const commentsRef = ref(dbRef, "comments");
export function uploadComment(author, comment, email) {
  const newPostRef = push(commentsRef);
  set(newPostRef, {
    author,
    comment,
    email,
  })
    .then((res) => {
      alert("Comment posted successfully");
      console.log(author + " said " + comment);
    })
    .catch((e) => {
      console.log("unseccessful, errror: " + e);
    });
}

export function getAllComments() {
  return get(ref(dbRef, "comments"));
}
