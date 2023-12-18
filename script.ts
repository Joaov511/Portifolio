const portiflioSiteBtn = document.getElementsByClassName('portifolioSiteBtn');
const portifolioCard = document.getElementsByClassName('portifolioCard');
const arrowToTop = document.getElementById('arrowToTop');
const portifolioTitle = document.getElementById('potifolioTitle');

let sideProjectsUrl: Array<string> = ['','https://joaov511.github.io/Sorting-Algorithms-Site/'];

for(let i : number = 0; i < portiflioSiteBtn.length; i++) {
    portiflioSiteBtn[i].addEventListener('click', function() {
        window.open(sideProjectsUrl[i]);
    })
}

document.addEventListener('scroll', function() {
    if(window.scrollY > 700) {
        arrowToTop.style.display = 'flex';
    }
    else {
        arrowToTop.style.display = 'none';
    }
})




