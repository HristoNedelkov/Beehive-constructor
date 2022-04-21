const navigation = Array.from(document.querySelector("#navigation").children);

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

navigation.forEach((element) => {
  let a = element.children[0];

  a.addEventListener("click", (e) => {
    const text = a.textContent;
    switch (text) {
      case "Products":
        show("catalog");

        break;
      case "Home":
        show("header", "intro");

        break;
      case "Info":
        show("info");

        break;
      case "Contact":
        show("contact");

        break;
      case "About us":
        show("about");
        break;

      default:
        show("header", "intro");
        //trimUrl("home");
        break;
    }
  });
});
 