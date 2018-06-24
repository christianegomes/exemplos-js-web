let nav = document.querySelector('nav');

function abrirMenu(){
    nav.style.transform = 'translateX(0)';
}

function fecharMenu(){
    nav.style.transform = 'translateX(-100%)';
}