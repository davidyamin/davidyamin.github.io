document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const showPortfolioItems = () => {
        const btn = document.querySelectorAll('.see-more'),
            portfolioItems = document.querySelectorAll('.inner__item'),
            main = document.querySelector('main'),
            skills = document.querySelector('.skills'),
            portfolio = document.querySelector('.portfolio'),
            returnBtn = document.querySelectorAll('.return');

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', () => {
                portfolioItems[i].classList.remove('hide');
                portfolioItems[i].classList.add('show');
                main.classList.add('hide');
                skills.classList.add('hide');
                portfolio.classList.add('hide');
                document.body.scrollIntoView('alignToTop');
            });
        }

        for (let i = 0; i < returnBtn.length; i++) {
            returnBtn[i].addEventListener('click', () => {
                portfolioItems[i].classList.remove('show');
                portfolioItems[i].classList.add('hide');
                main.classList.remove('hide');
                main.classList.add('show');
                skills.classList.remove('hide');
                skills.classList.add('show');
                portfolio.classList.remove('hide');
                portfolio.classList.add('show');
            });
        }
    };

    showPortfolioItems();

    const anchAnimate = () => {
        const anchItems = document.querySelector('.header__nav').querySelectorAll('a'),
              anchArr = Array.prototype.slice.call(anchItems);
  
          for (let anchor of anchArr) {
            anchor.addEventListener('click', (event) => {
              event.preventDefault();
    
              const blockId = anchor.getAttribute('href').substr(1);
    
              document.getElementById(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            });
        }    
    };
  
    anchAnimate();
});