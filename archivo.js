'use strict'
//Creacion de Class
class Articulo{
   constructor(nombre, precio,fdv,cantidadProductos){
       this.nombre= nombre;
       this.precio= precio;
       this.fdv= fdv;
       this.cantidadProductos=cantidadProductos;
   }
   //Metodo para agregar productos y mostrar evento en dom
   agregarProd(Art2) {
     $("#productosNew").prepend(`<div id=nuevoDiv> <ul class="ul"> 
                                     <li><b>Nombre del producto: </b>${Art2.nombre}</li>
                                     <li><b>Precio: </b>${Art2.precio}</li>
                                     <li><b>Fecha de vencimiento: </b>${Art2.fdv}</li>
                                     <li><b>Cantidad: </b>${Art2.cantidadProductos}</li>
                                   </ul>
                                   <button id="eliminar" onclick="$('#nuevoDiv').remove()";><b>Eliminar</b></button><br><br></div>'
   `);
   console.log (Art2);
   this.resetearFormulario(); 
   
  }
  //Metodo para que se reseten los inputs
  resetearFormulario(){
   document.getElementById(`formulario`).reset();
  }
  
}
 
//Eventos en el DOM--- Evento con JQuery
$("#formulario").submit (function(e){
 const nombreProducto = $('#name').val();
 const cantidadProductosNew = $('#cantidad').val();
 const vencimientoProducto= $('#vencimiento').val();
 const precioProducto = $('#precio').val();
 const Art2 = new Articulo (nombreProducto,cantidadProductosNew,vencimientoProducto,precioProducto);
 Art2.agregarProd(Art2);
 e.preventDefault();
 const articuloNuevo = JSON.stringify(Art2);
 localStorage.setItem("Articulo" , articuloNuevo);
});

$(".titulo2").animate({
            marginLeft:"450px",
            fontSize: "28px",
             },1500)
$("#imagenPrincipal").animate({
            marginLeft:"500px",
},1500)

