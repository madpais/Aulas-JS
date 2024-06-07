//getAttribute = Obter o valor do atributo (valor da linha)
//setAttribute - definir ou modificar o valor



const x = document.getElementById('myImage');


function changeImage() {
    const img = document.getElementById('myImage');
    const currentScr = img.getAttribute("src");
    
    if (currentScr === 'scarlett_johansson.jpg') {
        img.setAttribute("src", "viúva_negra.jpg");
        img.setAttribute("alt", "viúva_negra");

    } else {
        img.setAttribute("src", "scarlett_johansson.jpg");
        img.setAttribute("alt", "scarlett_johansson");
    }
    
}

console.log(1+1);
console.log(currentScr);