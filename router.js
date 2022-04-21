const paths = {
  catalog: document.querySelector("#catalog-template"),
  header: document.querySelector("#header-template"),
  intro: document.querySelector("#intro-template"),
  info: document.querySelector("#info-template"),
  contact: document.querySelector("#contact-template"),
  about: document.querySelector("#about-template"),

};

function trimUrl(path) {
  window.history.replaceState({}, "", "/" + path);
  return;
}
function show(...componentsToBeShown) {
  for (const key in paths) {
    paths[key].style.display = componentsToBeShown.includes(key)
      ? "block"
      : "none";
  }
}

function navigate(e) {
  const route = e.path[0].textContent;
  switch (route) {
    case "Products":
      show("catalog");
      // trimUrl("catalog");
      break;
    case "Home":
      show("header", 'intro');
      // trimUrl("home");
      break;
    case "Info":
      show("info");
      // trimUrl("info");
      break;
    case "Contact":
      show("contact");
      // trimUrl("contact");
      break;
    case "About us":
      show("about")
      break

    default:
      show("header", "intro");
      //trimUrl("home");
      break;
  }
}

//   navigation.forEach((element) => {
//     element.addEventListener("click", (e) => {
//       e.preventDefault();
//       const text = element.textContent;

//       if (text == "ABOUT US") {
//         show("aboutSectionComponents");
//         trimUrl("about-us");
//       } else if (text == "CAMPS") {
//         show("campsComponents");
//         trimUrl("camps");
//       } else if (text == "OFFERINGS") {
//         show("offerts");
//         trimUrl("offerts");
//       } else if (text == "BLOG") {
//         show("welcomeComponent", "commentsComponent");
//         trimUrl("blog");
//       } else if (text == "HOME") {
//         show("header", "welcomeComponent");
//         trimUrl("home");
//       }
//     });
//   });
