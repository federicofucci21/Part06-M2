$('#boton').click(function(){
    $.get('http://localhost:5000/amigos', function(data){
        console.log(data);
        data.forEach(e => {$(`<div> id='$(e.id)'<p>Nombre: $(e.name) </p></div>`).appenTo('body')
            
        });
    })
})