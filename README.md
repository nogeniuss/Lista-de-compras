# Lista de compras
## Documentação da Lista de Tarefas

Este documento descreve o código fonte de uma aplicação web simples para gerenciar uma lista de tarefas. A aplicação é composta por três arquivos:

* `index.html`: Define a estrutura da página web e carrega o arquivo JavaScript.
* `script.js`: Contém a lógica da aplicação para adicionar, deletar e marcar tarefas como concluídas.
* `style.css`: Define os estilos visuais da aplicação.

## index.html

**Estrutura:**

* Define o documento HTML5 com `<!DOCTYPE html>`.
* Define o idioma da página como inglês (`lang="en"`).
* Define o título da página (`<title>Lista de Tarefas</title>`).
* Linka o arquivo de estilos (`<link rel="stylesheet" href="style.css">`).

**Elementos:**

* `<h1>`: Exibe o título da página ("Lista de Tarefas").
* `<header>`: Contém o campo de entrada para adicionar tarefas e o botão "Adicionar".
    * `<input id="inputTarefa" type="text" placeholder="Digite Sua Tarefa">`: Campo de entrada para digitar a tarefa.
    * `<button onclick="addTarefa()" id="btn-add" class="add">Adicionar</button>`: Botão para adicionar a tarefa digitada na lista.
* `<main id="areaLista">`: Área principal onde a lista de tarefas é exibida.
* `<footer>`: Exibe uma mensagem informando que a lista não utiliza banco de dados.
* `<script src="./script.js"></script>`: Carrega o arquivo JavaScript que contém a lógica da aplicação.

## script.js

**Variáveis:**

* `contador`: Inteiro que contabiliza o número de tarefas adicionadas (inicia em 0).
* `input`: Referência ao elemento HTML do campo de entrada (`document.getElementById("inputTarefa")`).
* `btnAdd`: Referência ao elemento HTML do botão "Adicionar" (`document.getElementById("btn-add")`).
* `main`: Referência ao elemento HTML da área principal (`document.getElementById("areaLista")`).

**Funções:**

* `addTarefa()`: Função responsável por adicionar uma nova tarefa à lista.
    * Obtém o valor digitado no campo de entrada e remove espaços em branco (`valorInput = input.value.trim()`).
    * Verifica se o valor digitado não está vazio.
        * Se o valor estiver vazio, a função não faz nada.
    * Incrementa o contador de tarefas (`contador++`).
    * Cria um novo elemento HTML para a tarefa utilizando template literals. O elemento possui:
        * Um identificador único (`id="${contador}"`).
        * Uma classe CSS para estilizar a tarefa (`class="item"`).
        * Um ícone para marcar/desmarcar a tarefa (`<i id="icone_${contador}" class="mdi mdi-circle-outline"></i>`).
        * O texto da tarefa (`<div onclick="marcarTarefa(${contador})" class="item-nome"> ${valorInput} </div>`).
        * Um botão para deletar a tarefa (`<button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>`).
    * Adiciona o novo elemento HTML à área principal da lista (`main.innerHTML += novoItem`).
    * Limpa o campo de entrada e coloca o cursor nele novamente (`input.value = ""; input.focus();`).
* `deletar(id)`: Função responsável por deletar uma tarefa da lista.
    * Obtém o elemento da tarefa pelo seu identificador (`var tarefa = document.getElementById(id)`).
    * Remove o elemento da lista (`tarefa.remove()`).
* `marcarTarefa(id)`: Função responsável por marcar uma tarefa como concluída ou não.
    * Obtém o elemento da tarefa pelo seu identificador (`var item = document.getElementById(id)`).
    * Adiciona ou remove a classe "clicado" do elemento para alterar sua aparência e indicar o estado da tarefa.
    * Obtém o ícone da tarefa (`var icone = document.getElementById("icone_" + id)`).
    * Altera o ícone de acordo com o estado da tarefa (marcado ou não marcado).
* Evento `keyup` no campo de entrada:
    * Detecta quando a tecla Enter é pressionada (`event.keyCode === 13`).
    * Chama a função `addTarefa()` para adicionar a tarefa digitada na lista.

## style.css

O arquivo `style.css` é responsável por definir a aparência visual da aplicação, conferindo-lhe um design clean e intuitivo. Vamos explorar os principais estilos definidos:

### Estrutura e Layout
* **`* { box-sizing: border-box; }`:** Garante que o padding e a borda de um elemento sejam incluídos em sua largura e altura calculadas, evitando problemas de layout.
* **`body`:** Define estilos globais para o corpo da página, como margens, preenchimento, fonte e cor de fundo.
* **`header`, `main`, `footer`:** Definem o layout básico da página, posicionando os elementos de forma organizada.
* **`item`:** Define o estilo de cada item da lista, incluindo margens, preenchimento e sombra.

### Estilos Específicos dos Elementos
* **`input`, `button`, `.item-nome`, `.item-botao`:** Definem os estilos para os campos de entrada, botões e elementos de texto dentro de cada item da lista.
* **`.clicado`:** Define os estilos para um item quando ele é marcado como concluído (mudança de cor de fundo, texto riscado).
* **`.mdi-check-circle`, `.mdi-circle-outline`:** Definem os estilos para os ícones de checkmark e círculo, utilizados para indicar o estado da tarefa.

### Responsividade
* **Flexbox:** A utilização do Flexbox permite criar layouts flexíveis que se adaptam a diferentes tamanhos de tela, garantindo uma boa experiência do usuário em dispositivos móveis.

### Cores e Tipografia
* **Cores:** As cores utilizadas conferem à aplicação um aspecto clean e profissional. A escolha das cores para os elementos clicados e botões ajuda a criar contraste e hierarquia visual.
* **Tipografia:** A fonte Arial é utilizada para garantir legibilidade em diferentes dispositivos.

### Melhorias Possíveis
* **Temas:** Poderia ser implementada a possibilidade de o usuário escolher entre diferentes temas de cores.
* **Animações:** Adicionar animações suaves ao adicionar, remover ou marcar tarefas poderia tornar a experiência mais agradável.
* **Responsividade Avançada:** Refinar os estilos para garantir um layout perfeito em uma variedade maior de dispositivos e tamanhos de tela.
