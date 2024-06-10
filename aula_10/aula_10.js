//getAttribute = Obter o valor do atributo (valor da linha)
//setAttribute - definir ou modificar o valor



const x = document.getElementById('myImage');


function changeImage() {
    const img = document.getElementById('myImage');
    const currentScr = img.getAttribute("src");
    
    if (currentScr === 'exercício/img_1.webp') {
        img.setAttribute("src", "exercício/img_2.gif");
        img.setAttribute("alt", "Lara Croft");

    } else {
        img.setAttribute("src", "exercício/img_1.webp");
        img.setAttribute("alt", "scarlett_johansson");
    }
    
}
