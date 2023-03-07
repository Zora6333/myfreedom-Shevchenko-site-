
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

