function buscar() {

    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    if (!campoPesquisa) {

        section.innerHTML = "Nada foi encontrado";

        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let titulos = "";
    let atletas = "";
    let tags = "";

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        titulos = dado.titulos.toLowerCase();
        atletas = dado.atletas.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || titulos.includes(campoPesquisa) || atletas.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `

            <div class="item-resultado">
                <h2>
                    <a href="#">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta"> Atletas Campeões: ${dado.atletas}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>

        `;
        }       
    }

    if (!resultados) {

        resultados = "Nada foi encontrado";
    }

section.innerHTML = resultados;
}
//console.log(dados);


