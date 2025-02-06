let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector("#amigo").value;
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        document.querySelector("#amigo").value = "";
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length > 0)
    {
        let nomeAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = `Amigo sorteado: ${nomeAleatorio}`;
    }else{
        alert("Adicione Alguns amigos");
    }
}