var cube = document.querySelector('.header_me');

window.onscroll = function () {
    if(document.documentElement.scrollTop > 150){
        cube.classList.remove('header_show-front')
        cube.classList.add('header_show-bottom')
    }
    else{
        cube.classList.remove('header_show-bottom')
        cube.classList.add('header_show-front')
    }
}