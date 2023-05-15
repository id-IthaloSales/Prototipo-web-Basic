/* Neste exemplo, temos dois botões (botao1 e botao2) e duas listas (lista1 e lista2). As listas são inicialmente ocultas usando o estilo display: none;.
Quando um botão é clicado, a função toggleLista() é chamada, passando o ID da lista correspondente como parâmetro. A função verifica o estado atual da lista: se ela estiver oculta, o estilo display é alterado para block para torná-la visível; caso contrário, o estilo é alterado para none para ocultá-la novamente.
Ao clicar nos botões, as listas correspondentes serão alternadas entre visíveis e ocultas.
Você pode adicionar mais botões e listas seguindo o mesmo padrão, atribuindo IDs únicos aos botões e às listas e chamando a função toggleLista() corretamente. Além disso, você pode personalizar o estilo das listas e dos botões de acordo com suas necessidades.
Regenerate response */

function toggleLista(idLista) {
    var lista = document.getElementById(idLista);

    if (lista.style.display === "none") {
        lista.style.display = "block";
    }

    else {
        lista.style.display = "none";
    }
}

/*função tela operplay */
var openLoginBtn = document.getElementById('open-login-btn');
var loginOverlay = document.getElementById('login-overlay');

openLoginBtn.addEventListener('click', function() {
  loginOverlay.style.display = 'block';
});

loginOverlay.addEventListener('click', function(e) {
  if (e.target === loginOverlay) {
    loginOverlay.style.display = 'none';
  }
});