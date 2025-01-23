// Declaração do array para armazenar os amigos
let amigos = []

// Função para adicionar amigos
function adicionarAmigo() {
  // Capturar o valor do campo de entrada
  const input = document.getElementById('amigo')
  const nome = input.value.trim() // Remove espaços extras

  // Validar a entrada
  if (!nome) {
    alert('Por favor, insira um nome.')
    return
  }

  // Exibir uma mensagem de confirmação
  const confirmar = confirm(`Você deseja adicionar "${nome}" à lista?`)
  if (confirmar) {
    // Adicionar o nome ao array
    amigos.push(nome)

    // Atualizar a lista de amigos no HTML
    atualizarListaAmigos()

    // Limpar o campo de entrada
    input.value = ''
  } else {
    alert('Amigo não adicionado.')
  }
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos')
  lista.innerHTML = '' // Limpar a lista antes de atualizar

  amigos.forEach((amigo, index) => {
    const li = document.createElement('li')
    li.textContent = amigo

    // Destacar visualmente o último amigo adicionado
    if (index === amigos.length - 1) {
      li.style.color = 'green'
      li.style.fontWeight = 'bold'
    }

    lista.appendChild(li)
  })
}

// Função para sortear um amigo
function sortearAmigo() {
  // Validar que há amigos disponíveis
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo antes de realizar o sorteio.')
    return
  }

  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length)

  // Obter o nome sorteado
  const amigoSorteado = amigos[indiceAleatorio]

  // Mostrar o resultado no HTML
  const resultado = document.getElementById('resultado')
  resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`
}
