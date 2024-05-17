/* import Typed from 'typed.js';

const Typed = new Typed('#typing', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 10,
}); */




/* const typed = new Typed('#typing', {
    strings: ['Photographer', 'Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed : 50,
    startDelay : 25,
    loop : true,
    loopCount : Infinity
  }); */
 
 
 
 /* function openMenu(){
    menu.classList.add("display-menu")
    } */
    /* function closeMenu(){
    menu.classList.remove("display-menu")
    } */
    /* arc.onclick = function(){
        alert("hola")
    } */
    //openButton.onclick = openMenu
    //openButton.addEventListener('click', openMenu)

    const nav = document.querySelector('nav')
    const listas = document.querySelectorAll('#menu-list-item')
    nav.addEventListener('click', function (pipoca) {
        /* if (event.target.closest('#openButton')) {
            menu.classList.add("display-menu")   
           } */

        if (pipoca.target.closest('#openButton')) {
            menu.classList.add("display-menu")   
        }
        if (pipoca.target.closest('#closeButton')) {
            menu.classList.remove("display-menu")
               
           }
        if (pipoca.target.closest('#menu-list-item')) {
            menu.classList.remove('display-menu')
          for (const lista of listas) {
            lista.classList.remove('active')
          }
          pipoca.target.classList.add('active')
               
        }
        
    }) 

    
    


    

    /* openButton.addEventListener('click', openMenu)
    let ar = document.getElementById("arc")
    //ar.innerText = "clickea"
    let h1 = document.querySelector("h1")
    //h1.innerText = "Goodbye" 

const lista1 = document.querySelectorAll('.lista li')
console.log(lista1)
const lista2 = Array.from(lista1)
console.log(lista2)
for (const li of lista2) {
    console.log(li)
    li.style.backgroundColor = "lightgreen"
}
//className reemplaza todas las clases
const caja = document.querySelector(".box")
//caja.className = "caja"
//classList adiciona o remueve una clase 
caja.classList.add('caja1', 'caja2')
caja.classList.remove('caja1')

const cajita = document.querySelector('#box')
const boton = document.querySelector('#box-btn')
boton.onclick = function () {
    cajita.classList.toggle('hiden')
    
} */
//background-size : cover

//object-fit : cover  ---> siempre que se meta la imagen en un div

//<script src="https://unpkg.com/scrollreveal"></script>
const sr = new ScrollReveal({
    origin :'top',
    distance : '80px',
    duration : 2000,
    reset : true
})

//sr.reveal('.hero-tittle', { origin :'top',distance : '80px' });
//absolute  relative


/* <!-- .item$*3{item numero$} -->
  <div class="item1">item numero 1</div>
  <div class="item2">item numero 2</div>
  <div class="item3">item numero 3</div>

  <!-- ============= grid ================  -->

  .element : nth-child(10)
  grid-column-start : 3;
  grid-column-end : 4
  grid-column : 3/4;
  grid-row : 3/4
  grid-column :3 <!-- posicion --> / span 2 <!-- muevete 2 espacios -->
  grid-auto-flow : row;     <!-- direccion del grid -->
  grid-auto-flow : column;  <!-- direccion del grid -->
  grid-auto-rows : 1fr;     <!-- dividir en cuntas imagenes exista -->
  grid-auto-columns : 1fr;  <!-- dividir en cuntas imagenes exista -->
  grid-template-rows : repeat(4 <!-- pro tip e vez de numero colocar auto-fit -->, 100px <!-- en vez de un solo parametro colocar minmax(300px o lo que se quiera, 1fr) -->);      <!-- dividir en 4 filas de 100 px cada espacio -->
  grid-template-columns : repeat(4, 100px);   <!-- dividir en 4 columnas de 100 px cada espacio -->
  justify-content  <!-- para todo el contenedor --> 
  align-content    <!-- para todo el contenedor -->
  justify-items    <!-- solo para los elementos internos (hijos) --> 
  align-items      <!-- solo para los elementos internos (hijos) -->
  justify-self     <!-- solo para un elemento interno especifico (hijos) --> 
  align-self       <!-- solo para un elemento interno especifico (hijos) -->
  object-fit:cover
 */
  var typed = new Typed('#typing', {
    strings: ['Photographer', 'Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed : 50,
    startDelay : 25,
    loop : true,
    loopCount : Infinity
});

const body = document.body
const ls = window.localStorage
const btnTheme = document.getElementById('btnTheme')

// Preguntamos si esta activado el darkMode en el localStorage
const theme = ls.getItem('darkMode')
const sun = 'bx bxs-sun'
const moon = 'bx bxs-moon'

if (theme) {
  body.classList.add('dark')
  btnTheme.firstElementChild.className = sun
} else {
  body.classList.remove('dark')
  btnTheme.firstElementChild.className = moon
}

btnTheme.addEventListener('click', function () {
  body.classList.toggle('dark')
  if (body.classList.contains('dark')) {
    // entonces guardo en el localStorage el valor de dark
    ls.setItem('darkMode', true)
    btnTheme.firstElementChild.className = sun
  } else {
    // entonces voy a eliminar del localStorage el valor de dark
    ls.removeItem('darkMode')
    btnTheme.firstElementChild.className = moon
  }

})
