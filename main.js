let menu = document.querySelector("#icono-menu");
let navegacion = document.querySelector(".navegacion");

menu.addEventListener("click" , function(){
    navegacion.classList.toggle("active");
});

window.onscroll = () => {
    navegacion.classList.remove("active")
}


document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.querySelector('.carrito');
    const carritoIcono = document.getElementById('carrito-icono');
    const cerrarCarrito = document.getElementById('cerrar-carrito');
    const botonesAgregar = document.querySelectorAll('.fa-cart-shopping');
    const contenidoCarrito = document.querySelector('.contenido-carrito');
    const totalCarrito = document.querySelector('.precio-total');
    let total = 0;
    
    
    carritoIcono.addEventListener('click', () => {
      carrito.classList.toggle('mostrar-carrito');
    });
  
    
    cerrarCarrito.addEventListener('click', () => {
      carrito.classList.remove('mostrar-carrito');
    });
  
    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', (event) => {
          const elemento = event.target.parentElement;
          const nombre = elemento.querySelector('h2').textContent;
          const precio = parseFloat(elemento.querySelector('span').textContent.slice(1)); 
          
          agregarAlCarrito(nombre, precio);
        });
      });
      
      function agregarAlCarrito(nombre, precio) {
        const elementoCarrito = document.createElement('div');
        elementoCarrito.classList.add('item-carrito');
        elementoCarrito.innerHTML = `
          <p>${nombre} - $${precio.toFixed(3)}</p> <!-- Asegurar que el precio tenga 2 decimales -->
          <button class="btn-eliminar">Eliminar</button>
        `;
        contenidoCarrito.appendChild(elementoCarrito);
      
        total += precio;
        totalCarrito.textContent = `$${total.toFixed(3)}`; 
      
        const botonEliminar = elementoCarrito.querySelector('.btn-eliminar');
        botonEliminar.addEventListener('click', () => {
          contenidoCarrito.removeChild(elementoCarrito);
          total -= precio;
          totalCarrito.textContent = `$${total.toFixed(2)}`; 
        });
      }
    
 });


 
  


