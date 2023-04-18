fetch(`https://images-api.nasa.gov/search`)
  .then(response => response.json())
  .then(body => console.log(body))
  .catch(error => {
    console.error(error);
  });



const apiURL = 'https://images-api.nasa.gov/search?q=apollo%2011&media_type=image';

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const images = data.collection.items;
    const slider = document.querySelector('#slider');
    const nav = document.querySelector('#nav');
    let currentIndex = 0;
    images.length = 10


    let intervalId;

    function showImage(index) {
      // очищаем контейнер слайдера
      slider.innerHTML = '';
      // перебираем ссылки на изображения
      for (let i = 0; i < images[index].links.length; i++) {
        const imageUrl = images[index].links[i].href;
        // добавляем изображение в контейнер слайдера
        slider.innerHTML += `<img src="${imageUrl}" alt="NASA Image">`;
      }
    
      const links = nav.querySelectorAll('a');
      links.forEach(link => link.classList.remove('active'));
      links[index].classList.add('active');
    }
    
    function nextImage() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }
    
    function prevImage() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      showImage(currentIndex);
    }
    
    images.forEach((image, index) => {
      const link = document.createElement('a');
      link.href = '#';
      link.addEventListener('click', event => {
        event.preventDefault();
        // очищаем таймер
        clearInterval(intervalId);
        showImage(index);
      });
      nav.appendChild(link);
    });
    
    const prevButton = document.querySelector('.previous');
    prevButton.addEventListener('click', () => {
      // очищаем таймер
      clearInterval(intervalId);
      prevImage();
    });
    
    const nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', () => {
      // очищаем таймер
      clearInterval(intervalId);
      nextImage();
    });
    
    showImage(currentIndex);
    // сохраняем идентификатор таймера
    intervalId = setInterval(nextImage, 5000);
  })
  .catch(error => {
    console.error(error);
  });





/*Кнопка вверх*/
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.btn-up').fadeIn();
    } else {
      $('.btn-up').fadeOut();
    }
  });
  $('.btn-up').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 700);
  });
});
/*Кнопка вверх*/

