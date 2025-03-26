document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(text) {
    const taskList = document.getElementById('tasks');
    const li = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;
    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Concluir';
    completeBtn.onclick = function() {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            showCongratsMessage();
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remover';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function showCongratsMessage() {
    const congrats = document.getElementById('congrats-message');
    congrats.textContent = 'Parabéns! Tarefa concluída com sucesso!';
    congrats.classList.remove('congrats-hidden');
    congrats.classList.add('show');

    // Esconder a mensagem após 3 segundos
    setTimeout(() => {
        congrats.classList.remove('show');
        setTimeout(() => {
            congrats.classList.add('congrats-hidden');
        }, 500); // Aguarda o fade-out antes de esconder completamente
    }, 3000);
}
