/*$(document).ready(saluda);

function saluda(){
    alert($('h1').text());
}*/


$(function()
{
    //alert($('h1').text());
    /*Se crea un parrafo nuevo en objeto jQuery*/
    $nuevo = $('<p>Parrafo <b>nuevo</b></p>');
    $('h2').after($nuevo);
})

