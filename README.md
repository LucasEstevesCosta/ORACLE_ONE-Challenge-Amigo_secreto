# ORACLE_ONE-Challenge-Amigo_secreto

 
## Amigo Secreto
O objetivo deste desafio, é desenvolver uma aplicação que permita aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".

O usuário pode adicionar nomes por meio de um campo de texto e de um botão "Adicionar".

Os nomes inseridos são exibidos em uma lista visível na página e o botão "Sortear Amigo" seleciona um dos nomes de forma aleatória e exibe o resultado na tela.

## Funcionalidades:
*Adicionar nomes:* Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

*Validar entrada:* Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

*Visualizar a lista:* Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

*Sorteio aleatório:* Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

## Funções Principais

- `estaVazio()`: Valida se um campo está vazio
- `adicionarAmigo()`: Adiciona novo participante à lista
- `listarAmigos()`: Exibe lista atualizada de participantes
- `sortearAmigo()`: Realiza sorteio aleatório de um participante
- `removerAmigo()`: Remove participante específico da lista

## Principais Características

1. Sorteio automático e aleatório
2. Os nomes sorteados são retirados da lista

## Possíveis Melhorias

1. Persistência de dados (salvamento local/banco de dados)
2. Validação de nomes duplicados