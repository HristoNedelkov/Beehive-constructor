const imageList = [
  "20231211_200142.jpg",
  "20231211_200144.jpg",
  "20231211_200145.jpg",
  "20231211_200147.jpg",
  "20231211_200148.jpg",
  "20231211_200149.jpg",
  "20231211_200150.jpg",
  "20231211_200200.jpg",
  "20231211_200219.jpg",
  "20231211_200220.jpg",
  "20231211_200227.jpg",
  "20231211_200229.jpg",
  "20231211_200232.jpg",
  "20231211_200235.jpg",
  "20231211_200238.jpg",
  "20231211_200250.jpg",
  "20231211_200254.jpg",
  "20231211_200258.jpg",
  "20231211_200301.jpg",
  "20231211_200302.jpg",
  "20231211_200318.jpg",
  "20231211_200709.jpg",
  "20231211_200710.jpg",
  "20231211_200713.jpg",
  "20231211_200716.jpg",
  "20231211_200717.jpg",
  "20231211_202515.jpg",
  "20231211_202518.jpg",
  "20231211_202521.jpg",
  "20231211_202527.jpg",
  "20231211_202530.jpg",
  "20231211_202622.jpg",
  "20231211_202625.jpg",
  "20231211_202627.jpg",
  "20231211_202636.jpg",
  "cover-kosher-new.jpg",
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
    imgElement.src = `./images/beehive-prototype/lastPrototype/${image}`;
    imgElement.alt = image.split(".")[0];
    imgElement.className = "img-responsive";

    col.appendChild(imgElement);
    row.appendChild(col);
  });
});
