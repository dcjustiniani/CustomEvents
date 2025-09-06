// Task Form: Adds tasks and sends custom event
const form = document.querySelector('#task-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = document.querySelector('#task-input').value;

  // Create custom event with task in detail
  const event = new CustomEvent('taskAdded', {
    detail: { task: task },
    bubbles: true
  });

  document.dispatchEvent(event); // Send event
  form.reset(); // Clear form
});

// Task List: Listens for custom event and updates
const taskList = document.querySelector('#task-list');
document.addEventListener('taskAdded', (e) => {
  const li = document.createElement('li');
  li.textContent = e.detail.task; // Get task from detail
  taskList.appendChild(li);
});