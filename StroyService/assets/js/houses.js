

let houseTitle = document.querySelector('.animate-title'),
        houseTitleTop = houseTitle.getBoundingClientRect().top;

        window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset > houseTitleTop - window.innerHeight / 10) {
                houseTitle.style.top = 0;
                this.removeEventListener('scroll', onScroll);
            }
        });




let Offset = 0;

let houseLineWidth1 = document.getElementById('x1'),
    positionInfo1 = houseLineWidth1.getBoundingClientRect(),
    width1 = positionInfo1.width,
    
    houseLineWidth2 = document.getElementById('x2'),
    positionInfo2 = houseLineWidth2.getBoundingClientRect(),
    width2 = positionInfo2.width,

    houseLineWidth3 = document.getElementById('x3'),
    positionInfo3 = houseLineWidth3.getBoundingClientRect(),
    width3 = positionInfo3.width;    

const houses1 = document.querySelector('.houses1'),
      houses2 = document.querySelector('.houses2'),
      houses3 = document.querySelector('.houses3');


document.querySelector('.houses-next1').addEventListener('click', function(){

    Offset = Offset + 300;

    if (width1 === 900) {if (Offset >= 2100) {Offset = 0;}};
    if (width1 === 600) {if (Offset >= 2400) {Offset = 0;}};
    if (width1 <= 300) {if (Offset >= 2700) {Offset = 0;}};

    houses1.style.left = -Offset + 'px';
});

document.querySelector('.houses-prev1').addEventListener('click', function () {
    Offset = Offset - 300;

    if (width1 === 900) {if (Offset < 0) {Offset = 1800;}};
    if (width1 === 600) {if (Offset < 0) {Offset = 2100;}};
    if (width1 <= 300) {if (Offset < 0) {Offset = 2400;}};

    houses1.style.left = -Offset + 'px';
});

document.querySelector('.houses-next2').addEventListener('click', function(){
    Offset = Offset + 300;

    if (width2 === 900) {if (Offset >= 2100) {Offset = 0;}};
    if (width2 === 600) {if (Offset >= 2400) {Offset = 0;}};
    if (width2 <= 300) {if (Offset >= 2700) {Offset = 0;}};

    houses2.style.left = -Offset + 'px';
});

document.querySelector('.houses-prev2').addEventListener('click', function () {
    Offset = Offset - 300;

    if (width2 === 900) {if (Offset < 0) {Offset = 1800;}};
    if (width2 === 600) {if (Offset < 0) {Offset = 2100;}};
    if (width2 <= 300) {if (Offset < 0) {Offset = 2400;}};

    houses2.style.left = -Offset + 'px';
});

document.querySelector('.houses-next3').addEventListener('click', function(){
    Offset = Offset + 300;

    if (width3 === 900) {if (Offset >= 2100) {Offset = 0;}};
    if (width3 === 600) {if (Offset >= 2400) {Offset = 0;}};
    if (width3 <= 300) {if (Offset >= 2700) {Offset = 0;}};

    houses3.style.left = -Offset + 'px';
});

document.querySelector('.houses-prev3').addEventListener('click', function () {
    Offset = Offset - 300;

    if (width3 === 900) {if (Offset < 0) {Offset = 1800;}};
    if (width3 === 600) {if (Offset < 0) {Offset = 2100;}};
    if (width3 <= 300) {if (Offset < 0) {Offset = 2400;}};

    houses3.style.left = -Offset + 'px';
});


//calc code

let progresLine = document.querySelector('.progres_line');
const tabs = document.querySelectorAll(".tabs__link");
const contents = document.querySelectorAll(".tabs__pane");
let btnNext = document.querySelectorAll(".btn-next");

for (let i = 0; i < tabs.length; i++) {

  tabs[i].addEventListener("click", () => {
    for (let j = 0; j < contents.length; j++) {
      contents[j].classList.remove("tabs__pane_show");
    }
    for (let jj = 0; jj < tabs.length; jj++) {
      tabs[jj].classList.remove("tabs__link_active");
    }

    contents[i].classList.add("tabs__pane_show");
    tabs[i].classList.add("tabs__link_active");

    if(i === 0) {progresLine.style.width = 16.66 + '%';};
    if(i === 1) {progresLine.style.width = 33.33 + '%';}; 
    if(i === 2) {progresLine.style.width = 49.98 + '%';};
    if(i === 3) {progresLine.style.width = 66.64 + '%';};
    if(i === 4) {progresLine.style.width = 83.33 + '%';};
    if(i === 5) {progresLine.style.width = 100 + '%';};
  });
}

     btnNext[0].addEventListener("click", () => {
          contents[0].classList.remove("tabs__pane_show");
          tabs[0].classList.remove("tabs__link_active");
          contents[1].classList.add("tabs__pane_show");
          tabs[1].classList.add("tabs__link_active");
          progresLine.style.width = 33.33 + '%';
      })

        btnNext[1].addEventListener("click", () => {
          contents[1].classList.remove("tabs__pane_show");
          tabs[1].classList.remove("tabs__link_active");
          contents[2].classList.add("tabs__pane_show");
          tabs[2].classList.add("tabs__link_active");
          progresLine.style.width = 49.98 + '%';
      })
        btnNext[2].addEventListener("click", () => {
          contents[2].classList.remove("tabs__pane_show");
          tabs[2].classList.remove("tabs__link_active");
          contents[3].classList.add("tabs__pane_show");
          tabs[3].classList.add("tabs__link_active");
          progresLine.style.width = 66.64 + '%';
      })
        btnNext[3].addEventListener("click", () => {
          contents[3].classList.remove("tabs__pane_show");
          tabs[3].classList.remove("tabs__link_active");
          contents[4].classList.add("tabs__pane_show");
          tabs[4].classList.add("tabs__link_active");
          progresLine.style.width = 83.3 + '%';
      })
        btnNext[4].addEventListener("click", () => {
          contents[4].classList.remove("tabs__pane_show");
          tabs[4].classList.remove("tabs__link_active");
          contents[5].classList.add("tabs__pane_show");
          tabs[5].classList.add("tabs__link_active");
          progresLine.style.width = 100 + '%';
      })