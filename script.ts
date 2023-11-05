const moreBtn = document.getElementsByClassName('moreBtn');
const portifolioCard = document.getElementsByClassName('portifolioCard');

moreBtn[0].addEventListener('click', function() {
    let cardPosition : number = 0;
    let i : number = 0;
    portifolioCard[0].classList.add('moreBtnClick');
    for(i = 0 ; i < portifolioCard.length ; i++) {
        if(i == cardPosition){}
        else {
            portifolioCard[i].classList.add('hideCard');
        }
    }
})