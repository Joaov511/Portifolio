var portiflioSiteBtn = document.getElementsByClassName('portifolioSiteBtn');
var portifolioCard = document.getElementsByClassName('portifolioCard');
var sideProjectsUrl = ['none', 'https://joaov511.github.io/Sorting-Algorithms-Site/'];
var _loop_1 = function (i) {
    portiflioSiteBtn[i].addEventListener('click', function () {
        window.open(sideProjectsUrl[i]);
    });
};
for (var i = 0; i < portiflioSiteBtn.length; i++) {
    _loop_1(i);
}
