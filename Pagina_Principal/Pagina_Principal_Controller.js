const abrirBurger = document.querySelector('.menu-amburguesa');
const menuBurger = document.querySelector('.contenedor_navbar');
const cerrarBurger = document.querySelector('.cerrar');

const maquinaEscribir = document.querySelector('.typed');
const tituloAnimado = document.querySelector('#title_animacion');

const servicioAnimado = document.querySelector('.servicio');

/*new Typed(maquinaEscribir,{

    stringsElement  : tituloAnimado,
    typeSpeed       : 75,
    stardDaley      : 300,
    backSpeed       : 75,
    smartBackspace  : true,
    shuffle         : false,
    backDaley       : 1500,
    loop            : true,
    loopeCount      : false,
    showCursor      : true,
    cursorChar      : '|',
    contentType     : 'html'
});*/

abrirBurger.addEventListener('click', ()=>{
    menuBurger.classList.add('active');
});

cerrarBurger.addEventListener('click',()=>{
    menuBurger.classList.remove('active'); 
});

window.addEventListener('scroll', () =>{
    let pantalla = window.innerHeight / 1.5;
    let posicionObjeto = servicioAnimado.getBoundingClientRect().top

    if(posicionObjeto <= pantalla){
        servicioAnimado.classList.add('animar_servicio');
    }else if(posicionObjeto >= pantalla){
        servicioAnimado.classList.remove('animar_servicio');
    }
});