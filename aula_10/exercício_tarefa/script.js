// getElementById
// getAttribute
// setAttribute


function change1() {
    const img = document.getElementById('myImg1');
    const currentScr = img.getAttribute("src");

    if (currentScr === 'img/petter_1.jpg') {
        img.setAttribute("src", "img/petter_2.jpg");
        img.setAttribute("alt", "");

    } else {
        img.setAttribute("src", "img/petter_1.jpg");
        img.setAttribute("alt", "");
    }
    
}


function change2() {
    const img = document.getElementById('myImg2');
    const currentScr = img.getAttribute("src");

    if (currentScr === 'img/viúva_1.jpg') {
        img.setAttribute("src", "img/viúva_2.jpg");
        img.setAttribute("alt", "");

    } else {
        img.setAttribute("src", "img/viúva_1.jpg");
        img.setAttribute("alt", "");
    }
    
}


function change3() {
    const img = document.getElementById('myImg3');
    const currentScr = img.getAttribute("src");

    if (currentScr === 'img/mistica_1.png') {
        img.setAttribute("src", "img/mistica_2.webp");
        img.setAttribute("alt", "");

    } else {
        img.setAttribute("src", "img/mistica_1.png");
        img.setAttribute("alt", "");
    }
    
}
