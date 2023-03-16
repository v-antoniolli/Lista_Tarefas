// 3 -função de adicionar tarefa
function addTask() {
  // 4- pegar o titulo da tarefa.. o valor ...value
  const taskTitle = document.querySelector("#task-title").value;

  // 5 - pequena validação de existencia no taskTitle... 
  if (taskTitle) {
    // 6 - clonar o template
    const template = document.querySelector(".template")
    // 7 - cloneNode permite que clone a informação do html em uma nova variavel! é atribuido valores booleanos
    const newTask = template.cloneNode(true)
    // 8 - adicionar um titulo pegando a classe do span e usando o textContent pra trocar o texto que tem nela
    newTask.querySelector(".task-title").textContent = taskTitle;
    //9 - vai remover as classes extras alocadas na 
    newTask.classList.remove("template");
    newTask.classList.remove("hide");
    
    // 10 - adicionar tarefa na lista
    //primeiro...selecionar a lista
    const list = document.querySelector("#task-list");
    // 11 - adicionar a tarefa na lista
    list.appendChild(newTask); 

    // 13 (fora de ordem.. mas ta certo) - evento remover
    const removeBtn = newTask.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
      removeTask(this) //vai receber o parametro this pra referenciar qual vai ser deletada
    })

    // 15 - adicionar evento de completar tarefa
    const doneBtn = newTask.querySelector(".done-btn");
    doneBtn.addEventListener("click", function () {
      completeTask(this)
    })

    // 12 - lipar caixa de texto 
    document.querySelector("#task-title").value = ""; 
  }
}

// 14 - criando a função removeTask()
function removeTask(task) { //vai receber o parametro task... o que vai ser escrito
  task.parentNode.remove(true); // desta forma vai remover a task do "pai"
}
// 16 - criando função competeTask
function completeTask(task) {
  const taskComplete = task.parentNode; // vai acessar o "pai"
  taskComplete.classList.toggle("done");  //toggle serve para caso tenha a class done no elemento ele tira e caso não tenha ele coloca. muito semelhante a um if e else
}


// 1 - evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (event) {
  event.preventDefault() //é uma função de espera!!!
  
  // 2 - CRIANDO FUNÇÃO ADDTASK NA PARTE SUPERIOR
  addTask()
})