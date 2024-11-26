// Inicializa variáveis
let contador = 0; // Contabiliza o número de tarefas
let input = document.getElementById("inputTarefa"); // Referência ao campo de entrada
let btnAdd = document.getElementById("btn-add"); // Referência ao botão "Adicionar"
let main = document.getElementById("areaLista"); // Referência à área de conteúdo principal

// Função para adicionar uma nova tarefa
function addTarefa() {
  // Obtém o valor digitado no campo de entrada e remove espaços em branco
  let valorInput = input.value.trim(); 

  // Verifica se o valor digitado não está vazio
  if (valorInput) {
    contador++; // Incrementa o contador de tarefas

    // Cria um novo elemento HTML para a tarefa
    let novoItem = `
      <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
          <i id="icone_${contador}" class="mdi mdi-circle-outline"></i> </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
          ${valorInput} </div>
        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button> </div>
      </div>
    `;

    // Adiciona o novo item à lista de tarefas
    main.innerHTML += novoItem;

    // Limpa o campo de entrada e coloca o cursor nele novamente
    input.value = "";
    input.focus();
  }
}

// Função para deletar uma tarefa
function deletar(id) {
  // Obtém o elemento da tarefa pelo seu ID
  var tarefa = document.getElementById(id);

  // Remove a tarefa da lista
  tarefa.remove();
}

// Função para marcar uma tarefa como concluída ou não
function marcarTarefa(id) {
  // Obtém o elemento da tarefa pelo seu ID
  var item = document.getElementById(id);

  // Adiciona ou remove a classe "clicado" para indicar o estado da tarefa
  item.classList.toggle("clicado");

  // Obtém o ícone da tarefa
  var icone = document.getElementById("icone_" + id);

  // Altera o ícone para indicar o estado da tarefa
  if (item.classList.contains("clicado")) {
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");
  } else {
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}

// Adiciona um evento para detectar quando a tecla Enter é pressionada no campo de entrada
input.addEventListener("keyup", function (event) {
  // Verifica se a tecla pressionada foi a Enter
  if (event.keyCode === 13) {
    // Chama a função para adicionar a tarefa
    btnAdd.click();
  }
});