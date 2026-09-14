const artigos = document.querySelectorAll("article");

artigos.forEach(function (artigo) {
    // Seleciona os botões dentro do artigo atual
    const btnLike = artigo.querySelector(".btn-like");
    const btnDislike = artigo.querySelector(".btn-dislike");
    
    // Variável para controlar se o usuário curtiu ('like'), descurtiu ('dislike') ou nada (null)
    let statusReacao = null; 

    // Evento de clique no botão "Amei / Curtir"
    btnLike.addEventListener("click", function() {
        const contadorLike = btnLike.querySelector("span");
        const contadorDislike = btnDislike.querySelector("span");

        if (statusReacao === "like") {
            // Se já curtiu, desfaz o clique
            contadorLike.textContent = parseInt(contadorLike.textContent) - 1;
            btnLike.classList.remove("ativo-like");
            statusReacao = null;
        } else {
            // Se tinha descurtido antes, remove o descurtir primeiro
            if (statusReacao === "dislike") {
                contadorDislike.textContent = parseInt(contadorDislike.textContent) - 1;
                btnDislike.classList.remove("ativo-dislike");
            }
            // Adiciona o curtido
            contadorLike.textContent = parseInt(contadorLike.textContent) + 1;
            btnLike.classList.add("ativo-like");
            statusReacao = "like";
        }
    });

    // Evento de clique no botão "Não Gostei"
    btnDislike.addEventListener("click", function() {
        const contadorLike = btnLike.querySelector("span");
        const contadorDislike = btnDislike.querySelector("span");

        if (statusReacao === "dislike") {
            // Se já tinha descurtido, desfaz o clique
            contadorDislike.textContent = parseInt(contadorDislike.textContent) - 1;
            btnDislike.classList.remove("ativo-dislike");
            statusReacao = null;
        } else {
            // Se tinha curtido antes, remove a curtida primeiro
            if (statusReacao === "like") {
                contadorLike.textContent = parseInt(contadorLike.textContent) - 1;
                btnLike.classList.remove("ativo-like");
            }
            // Adiciona o descurtir
            contadorDislike.textContent = parseInt(contadorDislike.textContent) + 1;
            btnDislike.classList.add("ativo-dislike");
            statusReacao = "dislike";
        }
    });
});
