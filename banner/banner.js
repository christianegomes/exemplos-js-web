let banners = document.querySelectorAll('div');
let bannerAtivo = 0;

function mudarBanner(){
    banners[bannerAtivo].style.transform = 'translateX(-100%)';
    
    bannerAtivo++;

    if(bannerAtivo == banners.length){
        bannerAtivo = 0;
    }
    
    banners[bannerAtivo].style.transform = 'translateX(0)';
}

setInterval(mudarBanner, 2000);