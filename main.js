$(document).ready(function() {
    $("header button").click(function() { /*Chamando o objeto html apenas pelo seu tipo*/
        $("form").slideDown();
    })

    $("#botao-cancelar").click(function (){ /*Chamando o objeto html pelo id*/
        $("form").slideUp();
    })

    $("form").on("submit", function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val(); /*.val com jQuery é o mesmo que .value no JS puro*/
        const novoItem = $('<li style="display: none"></li>');

        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereco-imagem-nova').val('');
    })
})