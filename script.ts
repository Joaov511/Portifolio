const portiflioSiteBtn = document.getElementsByClassName('portifolioSiteBtn');
const portifolioCard = document.getElementsByClassName('portifolioCard');

for(let i : number = 0; i < portiflioSiteBtn.length; i++) {
    portiflioSiteBtn[i].addEventListener('click', function() {
        window.open('https://joaov511.github.io/Portifolio/')
    })
}