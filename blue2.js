document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    // Load todos from localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
  
    // Render todos from localStorage
    function renderTodos() {
      todoList.innerHTML = '';
      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        if (todo.completed) {
          li.classList.add('completed');
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(index));
        li.appendChild(deleteButton);
        li.addEventListener('click', () => toggleTodo(index));
        todoList.appendChild(li);
      });
    }
  
    // Add todo
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText === '') {
        alert('Please enter a to-do item.');
        return;
      }
      todos.push({ text: todoText, completed: false });
      localStorage.setItem('todos', JSON.stringify(todos));
      todoInput.value = '';
      renderTodos();
    }
  
    // Delete todo
    function deleteTodo(index) {
      todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodos();
    }
  
    // Toggle todo completion
    function toggleTodo(index) {
      todos[index].completed = !todos[index].completed;
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodos();
    }
  
    // Event listeners
    addButton.addEventListener('click', addTodo);
  
    // Initial render
    renderTodos();
  });
  