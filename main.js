const image = document.getElementById("dynamic-image");
image.addEventListener("mouseover", function () {
  image.src = "image2.img";
});
image.addEventListener("mouseout", function () {
  image.src = "image1.jpg";
});
