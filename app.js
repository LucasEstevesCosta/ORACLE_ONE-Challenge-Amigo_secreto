let amigos = []

function estaVazio(valor) {
    if (valor == "") {
        return true
    } else {
        return false
    }
}

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value

    if (estaVazio(amigo)) {
        alert('Digite um nome')
    } else {
        amigos.push(amigo)
        document.getElementById('amigo').value = ""
    }
    listarAmigos()
}

function listarAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = amigos
        .map(amigo => `<li>${amigo}</li>`)
        .join('')
}