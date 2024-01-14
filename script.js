const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

let imgcanvas
imgcanvas = document.getElementById('imgcanvas');

if (urlParams.has('imgsrc') && urlParams.get('imgsrc') != '') {
    const imgsrc = urlParams.get('imgsrc')
    console.log(imgsrc);
    imgcanvas.style.backgroundImage = "url(" + imgsrc + ")";
}