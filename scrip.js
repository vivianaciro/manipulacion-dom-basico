
/* en este consolog no comunicamos con la consola del navegador 
trayendo el codigo de html
console.log (`Hello, wordl`);
*/
/* 
*/

/*console.log(input.value);
console.log({
     h1,
     p,
     parrafito,
     pid,
     input,

})*/
/*  INNERHTML nos deja modificar desde js lo que diga en esa etiqueta de html
    h1.innerHTML = `patito <br> feo`;
    h1.innerText = `patito <br> feo`;
    con el innerText no permite que se vea en el html tal cual


/* SI LE QUIERO DAR UNA CLASE HAY UAN PROPIEDADindex.html scrip.js
MODIFICAR ATRIBUTO

    console.log(h1.getAttribute('class'));
    
    /* si quiero modificar atributo asi abajo

    h1.setAttribute('class', 'rojo');

*/
/*aqui agregue add un y elimine remove un argumento de la clase*/
//  h1.classList.add('rojo');
// h1.classList.remove('verde');

/* esto quita o pone el parametro--- toogle lo quita y contains lo pone
    h1.classList.toggle('verde');
    h1.classList.contains('verde')
*/
//modificamos el html desde JS
// input.value = "563" 

// const img = document.createElement('img');
// img.setAttribute('src','https://images.pexels.com/photos/861443/pexels-photo-861443.jpeg?auto=compress&cs=tinysrgb&w=1600')
// console.log(img);
// incertar imagen con app u borrarla de la pantalla mas no del codigo con inn
//pid.innerHTML = "";
//  pid.appendChild(img);
//************************************************************* */


const h1 = document.querySelector(`h1`);
const form = document.querySelector('#form');
const input1 = document.querySelector(`#calculo1`);
const input2 = document.querySelector(`#calculo2`);
const btn = document.querySelector(`#btnCalcular`);
const pResul = document.querySelector(`#resul`);

form.addEventListener("sumit", sumaInputValue);

function sumaInputValue(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResul.innerText = "resultado es:   " + sumaInputs;

}

