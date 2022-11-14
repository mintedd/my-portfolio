$(document).foundation()

function init(){
    $('.homepage').hide();
}
init();

var homepage = document.getElementById('myWork')

function loadPage(){ 
    $('.homepage').show();
    $('.hero').hide();

}
homepage.addEventListener('click',loadPage)