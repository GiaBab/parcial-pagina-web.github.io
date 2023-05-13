const btnSwitch = document.querySelector('.switch');
const $body = document.querySelector('body')
const $a = document.querySelectorAll('a')

function swapImages()
{
    // se encarga de cambiar las imagenes cuando se cambia de modo oscuro/claro
    
    var img = document.querySelector('#switchImg') ;
    var imgLogo = document.querySelector('#switchIcon') ;
    if(img.getAttribute('src') == 'modoOscuro.png')
    {
        img.setAttribute('src', 'modoLuminoso.png') ;
        imgLogo.setAttribute('src', '5f75b78d4598bd2f643c703d_virbela-dark-logo-p-500.png');
    }
    else
    {
        img.setAttribute('src', 'modoOscuro.png') ;
        imgLogo.setAttribute('src', '5f75b78d4598bd2f643c703d_virbela-white-logo-p-500.png')
    }
}

btnSwitch.addEventListener('click', () => 
    // cuando se haga click en el boton de modo oscuro/claro este cambia a lo que se seleciona
    {
        swapImages() ;
        $body.classList.toggle('bg-light') ;
        $body.classList.toggle('text-dark') ;
        $body.classList.toggle('bg-dark') ;
        $body.classList.toggle('text-white');
        btnSwitch.classList.toggle('active') ;
        $a.forEach(a => a.classList.toggle('text-white'));
    }
)

// se encarga de mover el header y agregar efectos
window.onscroll = function() {scrollHeader()};

var $header = document.querySelector('header');
var sticky = $header.offsetTop;

function scrollHeader() 
{
    if (window.pageYOffset > sticky) 
    {
      $header.classList.add("sticky");
    } 
    else 
    {
      $header.classList.remove("sticky");
    }
}  