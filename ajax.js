//LLamada ajax
let listaDeArticulos = "";
let contenidoJson = [];
function cargoLista () {
    $.ajax({
        url: "topArticulos.json",
        dataType: "json",
        success: function(response) {
           contenidoJson = response
           $.each(contenidoJson, function(i) {
            listaDeArticulos += 
              `<div id="producContainer">
                <li>
                    <span>${contenidoJson[i].nombre}</span>
                </li>
                <li>
                   precio: ${contenidoJson[i].precio}
                </li>
                <li>
                   fecha de vencimiento: ${contenidoJson[i].fechaDeVencimiento}
                </li>
                <li>
                    cantidad: ${contenidoJson[i].cantidad}
                </li>
               
                    </div>`
           })
           $("#containerProducts").html(listaDeArticulos)
        },
        error: function() {
          console.error("Ocurrió un error... :(")
          listaDeArticulos = `<p>Ocurrio un error inesperado. Por favor, vuelva a cargar la pagina.</p>`
          $("#containerProducts").html(listaDeArticulos)
       } 
    })
}
