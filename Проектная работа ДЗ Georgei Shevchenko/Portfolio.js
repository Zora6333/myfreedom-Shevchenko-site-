document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".hover-image-5 img");
  images.forEach(function(image) {
    image.onclick = function() {
      zoomIn(image);
    };
  });

  function zoomIn(img) {
    var zoomedImg = document.createElement("img");
    zoomedImg.src = img.src;
    zoomedImg.style.position = "fixed";
    zoomedImg.style.top = "50%";
    zoomedImg.style.left = "50%";
    zoomedImg.style.transform = "translate(-50%, -50%)";
    zoomedImg.style.maxWidth = "80%";
    zoomedImg.style.maxHeight = "80%";
    zoomedImg.style.zIndex = 9999;
    document.body.appendChild(zoomedImg);
    zoomedImg.onclick = function() {
      document.body.removeChild(zoomedImg);
    };
  }
});
document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".hover-image-5 img");
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
      zoomIn(this);
    };
  }

  function zoomIn(img) {
    var zoomedImg = document.createElement("img");
    zoomedImg.src = img.src;
    zoomedImg.style.position = "fixed";
    zoomedImg.style.top = "50%";
    zoomedImg.style.left = "50%";
    zoomedImg.style.transform = "translate(-50%, -50%)";
    zoomedImg.style.maxWidth = "80%";
    zoomedImg.style.maxHeight = "80%";
    zoomedImg.style.zIndex = 9999;
    document.body.appendChild(zoomedImg);
    zoomedImg.onclick = function() {
      document.body.removeChild(zoomedImg);
    };
  }
});


const portfolioButtons = document.querySelectorAll(".portfolio__btn");
const portfolioList = document.querySelector(".portfolio__buttons");

const portfolioButtonController = () => {
  portfolioList.addEventListener("click", (e) => {
    const portfolioBtn = e.target.closest(".portfolio__btn");

    if (!portfolioBtn) return;

    portfolioButtons.forEach((item) => {
      if (item === portfolioBtn) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });


  portfolioBtn.addEventListener('mouseover', function handleMouseOver() {
    box.style.color = 'red';
  });

  portfolioBtn.addEventListener('mouseout', function handleMouseOut() {
    box.style.color = 'black';
  });

  const portfolioBtn = e.target.closest(".portfolio__btn");

  if (!portfolioBtn) return;

  portfolioButtons.forEach((item) => {
    if (item === portfolioBtn) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
