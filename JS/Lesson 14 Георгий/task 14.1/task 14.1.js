
const tabs = document.querySelector('.tabs');
const buttons = tabs.querySelectorAll('button');
const contents = tabs.querySelectorAll('.tab-content');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    openTab(event, button.id + '-content');
  });
});

function openTab(event, id) {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  contents.forEach((content) => {
    content.style.display = 'none';
  });

  const clickedButton = event.target;
  clickedButton.classList.add('active');

  const clickedContent = tabs.querySelector('#' + id);
  if (clickedContent) {
    clickedContent.style.display = 'block';
  }
}

