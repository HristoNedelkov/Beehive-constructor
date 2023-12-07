const imageList = [
  "20231123_225807.jpg",
  "20231124_004730.jpg",
  "20231124_005631.jpg",
  "20231124_102554.jpg",
  "20231124_105158.jpg",
  "20231124_105203.jpg",
  "20231124_131337.jpg",
  "20231124_131523.jpg",
  "20231124_131528.jpg",
  "20231124_131538.jpg",
  "20231124_131539.jpg",
  "20231124_131541.jpg",
  "20231124_131542 1.jpg",
  "20231124_131542.jpg",
  "20231206_152822.jpg",
  "20231206_152825.jpg",
  "20231206_152828.jpg",
  "20231206_152830.jpg",
  "20231206_152849.jpg",
  "20231206_152856.jpg",
  "20231206_152903.jpg",
  "20231206_152906.jpg",
  "20231206_152909.jpg",
  "20231206_152911.jpg",
  "20231206_153048.jpg",
  "20231206_153049.jpg",
  "20231206_153101.jpg",
  "20231206_153107.jpg",
  "duno-1.jpg",
  "durveni-2.jpg",
  "durveni-naprevqne.jpg",
  "durveni-ramki.jpg",
  "images.js",
  "index.js",
  "kosher-1.jpg",
  "kosher-2.jpg",
  "kosher-otgore.jpg",
  "kosher-remka.jpg",
  "lastPrototype",
  "naruchnik_korica.png",
  "ramka.jpg",
  "stari-1.jpg",
  "stari-2.jpg",
];

document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("photoGrid");

  let row = null;
  imageList.forEach((image, index) => {
    console.log(image, index);
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
