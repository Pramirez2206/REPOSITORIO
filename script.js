document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "descarga.jpg",
      "descarga1.jpg",
      "descarga2.jpg",
      "descarga3.jpg"
    ];
    let currentImageIndex = 0;
  
    const sliderContainer = document.getElementById("slider-container");
    const galleryContainer = document.getElementById("gallery-container");
    const toggleButton = document.getElementById("toggle-btn");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
  
    prevButton.addEventListener("click", showPreviousImage);
    nextButton.addEventListener("click", showNextImage);
    toggleButton.addEventListener("click", toggleView);
  
    function showPreviousImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateImage();
    }
  
    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateImage();
    }
  
    function updateImage() {
      const imgElements = document.getElementsByClassName("img");
      for (let i = 0; i < imgElements.length; i++) {
        imgElements[i].src = images[currentImageIndex];
      }
    }
  
    function toggleView() {
      if (sliderContainer.style.display === "none") {
        sliderContainer.style.display = "block";
        galleryContainer.style.display = "none";
        toggleButton.textContent = "Mostrar galería";
      } else {
        sliderContainer.style.display = "none";
        galleryContainer.style.display = "flex";
        toggleButton.textContent = "Mostrar slider";
      }
    }
  });
  