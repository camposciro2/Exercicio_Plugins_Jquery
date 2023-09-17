$(document).ready(function () {
    $('#nome').mask('A', {
        translation: {
            'A': { pattern: /[a-zA-Z\sáéíóúãõçàèìòùäëïöü]/, recursive: true }
        }
    });
    $('#telefone').mask('(00) 00000-0000', {
        translation: {
            '0': { pattern: /[0-9]/ }
        }
    });
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#cep').on('blur', function () {
        var cep = $(this).val().replace(/\D/g, '');
        $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function (data) {
            if (data.erro) {
                alert('CEP não encontrado');
            } else {
                $('#endereco').val(`${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`);
            }
        });
    });
});