// Seleciona o elemento de entrada de tarefa
const input = document.getElementById("taskInput");

// Seleciona a lista de tarefas
const ul = document.getElementById("taskList");

// Função para adicionar uma tarefa
function addTask() {
    // Verifica se o campo de entrada não está vazio
    if (input.value !== "") {
        // Cria um elemento de lista (li)
        const li = document.createElement("li");
        
        // Define o conteúdo do elemento de lista
        li.textContent = input.value;
        
        // Cria um botão para remover a tarefa
        const removerBotao = document.createElement("button");
        removerBotao.textContent = "Remover";
        
        // Define a ação do botão
        removerBotao.onclick = function() {
            // Remove o elemento de lista da lista
            ul.removeChild(li);
        
        }
            
            // Adiciona o elemento de lista novamente para manter a ordem
            ul.appendChild(li);
            
            // Adiciona o botão novamente para manter a ordem
            li.appendChild(removerBotao);
       
        
        // Limpa o campo de entrada
        input.value = "";
        
    } else {
        // Mostra um alerta se o campo de entrada estiver vazio
        alert("Por favor insira uma tarefa");
    }
}
