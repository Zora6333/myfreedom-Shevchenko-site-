fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        const taskList = document.getElementById('task-list');
        const tasks = data.slice(0, 20); 


        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.title;
            taskList.appendChild(taskItem);
        });
    });