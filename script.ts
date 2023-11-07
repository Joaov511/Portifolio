const portiflioSiteBtn = document.getElementsByClassName('portifolioSiteBtn');
const portifolioCard = document.getElementsByClassName('portifolioCard');

let sideProjectsUrl: Array<string> = ['none','https://joaov511.github.io/Sorting-Algorithms-Site/'];

for(let i : number = 0; i < portiflioSiteBtn.length; i++) {
    portiflioSiteBtn[i].addEventListener('click', function() {
        window.open(sideProjectsUrl[i]);
    })
}