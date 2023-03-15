//função de adicionar tarefa
function addTask() {
  //pegar o titulo da tarefa.. o valor ...value
  const taskTitle = document.querySelector("#task-title").value;

  //pequena validação... 
  if (taskTitle) {
    //clonar o template
    const template = document.querySelector(".template")
    // cloneNode permite que clone a informação do html em uma nova variavel! é atribuido valores booleanos
    const newTask = template.cloneNode(true)
    //adicionar um titulo pegando a classe do span e usando o textContent pra trocar o texto que tem nela
    newTask.querySelector(".task-title").textContent = taskTitle;
    //vai remover as classes extras alocadas na 


  }
}


//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (event) {
  event.preventDefault()

  //CRIANDO FUNÇÃO ADDTASK NA PARTE SUPERIOR
  addTask()
})