fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => {
    const taskTitle = data.title;
    document.getElementById('task-title').textContent = taskTitle;
});
