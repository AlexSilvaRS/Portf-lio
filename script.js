document.addEventListener("DOMContentLoaded", function () {
  const projetos = [
    {
      titulo: "Projeto 1",
      descricao: "Uma calculadora feita em HTML,CSS e JAVASCRIPT.",
      imagem: "/imagens/imagem1.jpg",
    },
    {
      titulo: "Projeto 2",
      descricao: "Projeto Radar,simulação de um Radar com relógio em tempo real.Feito em HTML,CSS e JAVASCRIPT",
      imagem: "/imagens/imagem2.jpg",
    },
    {
      titulo: "Projeto 3",
      descricao: "Calculadora de Livros,feito em HTML,CSS e JAVASCRIPT",
      imagem: "/imagens/imagem3.jpg",
    }
  ];

  const listaProjetos = document.getElementById("lista-projetos");
  const conteudoExibido = document.getElementById("conteudo-exibido");

  projetos.forEach((projeto) => {
    const button = document.createElement("button");
    button.textContent = projeto.titulo;

    button.addEventListener("click", function () {
      const tituloProjeto = document.createElement("h2");
      tituloProjeto.textContent = projeto.titulo;

      const descricaoProjeto = document.createElement("p");
      descricaoProjeto.textContent = projeto.descricao;

      const imagemProjeto = document.createElement("img");
      imagemProjeto.setAttribute("src", projeto.imagem);



      conteudoExibido.innerHTML = ''; // Limpa o conteúdo anterior
      conteudoExibido.appendChild(tituloProjeto);
      conteudoExibido.appendChild(descricaoProjeto);
      conteudoExibido.appendChild(imagemProjeto);


      conteudoExibido.style.display = "block"; // Exibe a section
    });

    listaProjetos.appendChild(button);
  });

  // Adiciona um evento para ocultar a section ao clicar fora dela
  window.onclick = function (event) {
    if (event.target == conteudoExibido) {
      conteudoExibido.style.display = "none";
    }
  };
});

