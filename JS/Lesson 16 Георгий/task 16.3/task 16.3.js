const result = document.getElementById('result');

function addInfo(tag, content, className) {
  const element = document.createElement(tag);
  element.textContent = content;
  element.classList.add(className);
  result.appendChild(element);
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
xhr.onload = function() {
  const comments = JSON.parse(xhr.response).slice(0, 10);
  for (const comment of comments) {
    addInfo('div', '', 'comment');
    addInfo('div', comment.name, 'name');
    addInfo('div', comment.email, 'email');
    addInfo('div', comment.body, 'body');
  }
}
xhr.send();