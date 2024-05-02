document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    const form = document.querySelector("form");

    const tarefa = {
        titulo: form.querySelector("#titulo").value,
        email: form.querySelector("#email").value,
        username: form.querySelector("#username").value,
        tipo: form.querySelector('#tipo').value
    };

    validar(tarefa);

    salvar(tarefa);
});

function salvar(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    window.location.href = "index.html";
}

function validar(tarefa) {
    limparErros();

    if (tarefa.titulo.trim() == "") {
        document.querySelector("#titulo").classList.add("is-error");
        document.querySelector("#titulo-erro").innerText = "O título é obrigatório";
    }

    if (tarefa.email.trim() == "" || tarefa.email.length < 10) {
        document.querySelector("#email").classList.add("is-error");
        document.querySelector("#email-erro").innerText = "O email deve ter pelo menos 10 caracteres";
    }

    if (tarefa.username.trim() == "" || tarefa.username.length < 10) {
        document.querySelector("#username").classList.add("is-error");
        document.querySelector("#username-erro").innerText = "O username deve ter pelo menos 10 caracteres";
    }
}

function limparErros() {
    const campos = document.querySelectorAll("input.is-error, textarea.is-error");

    campos.forEach(input => input.classList.remove("is-error"));

    document.querySelectorAll(".nes-field span").forEach(span => (span.innerText = ""));
}
