$(document).ready(function() { 

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p> \u{1F538} ${novaTarefa} </p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
        
    })

    $('ul').on('click','li', function(e) {
        $(e.target).toggleClass('check-botao')
        
    })
})
