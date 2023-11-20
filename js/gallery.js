document.addEventListener("DOMContentLoaded", function () {
  const imageList = [
    "duno-1.jpg",
    "durveni-2.jpg",
    "durveni-naprevqne.jpg",
    "durveni-ramki.jpg",
    "kosher-1.jpg",
    "kosher-2.jpg",
    "kosher-otgore.jpg",
    "kosher-remka.jpg",
    "ramka.jpg",
    "stari-1.jpg",
    "stari-2.jpg",
  ];

  const gridContainer = document.getElementById("photoGrid");

  let row = null;
  imageList.forEach((image, index) => {
    const colClass = index % 5 === 0 ? "col-md-6" : "col-md-4";
    const col = document.createElement("div");
    
    col.className = `${colClass} col-sm-6`;
    if (index % 3 === 0) {
      row = document.createElement("div");
      row.className = "row";
      gridContainer.appendChild(row);
    }

    col.className = "col-md-4 col-sm-6";

    const imgElement = document.createElement("img");
    imgElement.src = `./images/beehive-prototype/${image}`;
    imgElement.alt = image.split(".")[0];
    imgElement.className = "img-responsive";

    col.appendChild(imgElement);
    row.appendChild(col);
  });
});
