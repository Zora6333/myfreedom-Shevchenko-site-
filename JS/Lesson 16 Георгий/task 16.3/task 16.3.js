fetch('https://ucarecdn.com/f9cf39fd-9f6d-409f-8dd4-51e416480bdc/ScreenshotatNov30170836.png')
.then(response => response.json())
.then(data => {
   const contentBlock = document.querySelector('.contentBlock')
   const tasks = data.slice(0, 20);
  
   unction addInfo(tagName, textContent, className) {
      const tag = document.createElement(tagName);
      tag.textContent = textContent;
      tag.classList.add(className);
      resultBlock.appendChild(tag);
    }
});