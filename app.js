// lista de amigos
let amigos = []

/**
 * Verifica se o valor fornecido é uma string vazia.
 * @param {string} valor - O valor a ser verificado.
 * @returns {boolean} Retorna true se o valor for uma string vazia, caso contrário false.
 */
function estaVazio(valor) {
    if (valor == "") {
        return true
    } else {
        return false
    }
}

/**
 * Adiciona um novo amigo à lista de amigos.
 * Verifica se o campo de entrada está vazio e exibe um alerta se necessário.
 * Caso contrário, adiciona o nome à lista e limpa o campo de entrada.
 * Atualiza a exibição da lista de amigos.
 */
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

/**
 * Atualiza a lista de amigos com os elementos da lista amigos.
 * Chama innerHTML para recriar a lista com os elementos da lista amigos.
 */
function listarAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = amigos
        .map(amigo => `<li>${amigo}</li>`)
        .join('')
}

/**
 * Sorteia aleatoriamente um amigo da lista de amigos e exibe o resultado.
 * Se a lista estiver vazia, exibe um alerta solicitando a adição de amigos.
 * Após o sorteio, remove o amigo sorteado da lista e atualiza a exibição da lista.
 */
function sortearAmigo() {
    resultado = document.getElementById('resultado')
    if (amigos.length == 0) {
        alert('Adicione amigos antes de sortear')
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
        resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`
        removerAmigo(amigoSorteado)
        listarAmigos()
    }
}

/**
 * Remove um amigo da lista de amigos.
 * @param {string} amigoParaRemover - Nome do amigo a ser removido.
 */
function removerAmigo(amigoParaRemover) {
    const index = amigos.indexOf(amigoParaRemover)
    if (index > -1) {
        amigos.splice(index, 1)
    }
}