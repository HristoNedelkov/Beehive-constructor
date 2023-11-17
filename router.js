const navigation = Array.from(document.querySelector("#navigation").children);

const paths = {
  catalog: document.querySelector("#catalog-template"),
  header: document.querySelector("#header-template"),
  intro: document.querySelector("#intro-template"),
  info: document.querySelector("#info-template"),
  contact: document.querySelector("#contact-template"),
  about: document.querySelector("#about-template"),
  gallery: document.querySelector("#gallery-template"),
};

function changeUrl(path) {
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
      case "Прототипи":
        show("catalog");
        break;
      case "Начало":
        show("header", "intro");
        break;
      case "Информация":
        show("info");
        break;
      case "Свържи се с нас":
        show("contact");
        break;
      case "Галерия":
        show("gallery");
        break;
      default:
        show("header", "intro");
        break;
    }
  });
});
