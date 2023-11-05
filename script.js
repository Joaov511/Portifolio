var moreBtn = document.getElementsByClassName('moreBtn');
var portifolioCard = document.getElementsByClassName('portifolioCard');
moreBtn[0].addEventListener('click', function () {
    var cardPosition = 0;
    var i = 0;
    portifolioCard[0].classList.add('moreBtnClick');
    for (i = 0; i < portifolioCard.length; i++) {
        if (i == cardPosition) { }
        else {
            portifolioCard[i].classList.add('hideCard');
        }
    }
});
