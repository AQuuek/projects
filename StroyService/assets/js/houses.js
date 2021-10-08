
//load template 

let headerText = '<div class="d-flex align-items-center"><div> <img class="img-fluid logo" src="assets/img/index/logo.png" alt="logo"> </div> <div class="ms-auto d-none d-xl-flex social-icon-box"><a href="#"><img class="social-icon" src="assets/img/icon/twiter.png" alt="twiter"></a><a href="#"><img class="social-icon" src="assets/img/icon//Gmail.png" alt="Gmail"></a><a href="#"><img class="social-icon" src="assets/img/icon/WhatsUp.png" alt="WhatsUp"></a><a href="#"><img class="social-icon" src="assets/img/icon/facebook.png" alt="facebook"></a></div></div><nav class="navbar navbar-expand-lg navbar-dark p-0" style="background-color: #00043c;"><a class="navbar-brand" href="#" style="padding-left: 2em !important; color: #e9e9e9 !important;">Меню</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="margin: 1em !important;"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><a class="nav-link p-0" aria-current="page" href="index.html"><li id="n1" class="nav-item">Главная</li></a><a class="nav-link p-0" href="house.html"><li class="nav-item nav-active">Дома</li></a><a class="nav-link p-0" href="about.html"><li class="nav-item">О нас</li></a><a class="nav-link p-0" href="contact.html"><li class="nav-item">Контакты</li></a></ul></d</nav>'

  function setHeader() {
    let header = document.createElement("div");
    header.innerHTML = headerText ;
    document.body.insertAdjacentElement('afterbegin', header);
  }

let footerText = '<div class="container-fluid p-0"><div class="row d-flex" style="color: #fff"><div class="col-xxl-8 col-xl-8 col-lg-12 d-none d-xl-block d-lg-block d-md-block" style="background-color: #252525;"><div class="d-flex"><div class="footer-link col-sm-3 "><a href="index.html"><h4 style="margin-bottom: 20px;">Главная</h4></a><a href="index.html #advantages">Наши преимущества</a><a href="index.html #state">Наша статистика</a><a href="index.html #reviews">Отзывы наших клиентов</a></div><div class="footer-link col-sm-3"><a href="house.html"><h4 style="margin-bottom: 20px;">Дома</h4></a><a href="house.html #1houses">Наши проекты</a><a href="house.html #calc">Дом на заказ</a><a href="house.html #payinfo">Как происходит оплата</a></div>      <div class="footer-link col-sm-3"><a href="about.html"><h4 style="margin-bottom: 20px;">О нас</h4></a><a href="about.html #mision">Наша цель</a><a href="about.html #team">Наши специалисты</a><a href="about.html #map">Наши дома</a></div>      <div class="footer-link col-sm-3"><a href="contact.html"><h4 style="margin-bottom: 20px;">Контакты</h4></a><a href="contact.html #contact">Адрес отдела продаж</a><a href="contact.html #contact-data">Номер менеджера</a><a href="contact.html #contact ">Местоположение на карте</a></div>    </div><div class="d-flex col-sm-12"><div class="d-flex flex-column p-5"><span>8-918-111-22-33    Позвоните нам, и мы ответим на все ваши вопросы !</span><span>example@mail.com   Отправьте нам письмо и мы дадим вам ответ через несколько минут</span></div><div class="ms-auto social-icon-box"><a href="#"><img class="social-icon" src="assets/img/icon/twiter.png" alt="twiter"></a><a href="#"><img class="social-icon" src="assets/img/icon//Gmail.png" alt="Gmail"></a><a href="#"><img class="social-icon" src="assets/img/icon/WhatsUp.png" alt="WhatsUp"></a><a href="#"><img class="social-icon" src="assets/img/icon/facebook.png" alt="facebook"></a></div></div></div><div class="col-xxl-4 col-xl-4 col-lg-12" style="background-color: #3d3d3d"> <h4 class="text-center" style="margin: 40px 0 20px 0; color:#fff;">Обратная связь</h4><form class="footer-form" action="#"><div class="footer-conteiner"><i class="fas fa-user"></i><input class="input-footer" type="text" placeholder="user"></div><div class="footer-conteiner"><i class="fas fa-at"></i><input class="input-footer" type="text" placeholder= "example@mail.ru"></div>  <div class="footer-conteiner"><i class="fas fa-phone-alt"></i><input class="input-footer" type="text" placeholder="+7(918)-111-22-33"></div>    <textarea class="footer-conteiner" name="" id="#" placeholder="Ваше сообщение..."></textarea><button class="btn-footer-form">ОТПРАВИТЬ ЗАЯВКУ</button></form></div>    </div>  </div>'

  function setFooter() {
    let footer = document.createElement("div");
    footer.innerHTML = footerText ;
    document.body.insertAdjacentElement('beforeend', footer);
  }

  function loadTemplate() {
    setHeader();
    setFooter();
  }

  window.onload = loadTemplate;



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
    if (width1 === 300) {if (Offset >= 2700) {Offset = 0;}};

    houses1.style.left = -Offset + 'px';
});

document.querySelector('.houses-prev1').addEventListener('click', function () {
    Offset = Offset - 300;

    if (width1 === 900) {if (Offset < 0) {Offset = 1800;}};
    if (width1 === 600) {if (Offset < 0) {Offset = 2100;}};
    if (width1 === 300) {if (Offset < 0) {Offset = 2400;}};

    houses1.style.left = -Offset + 'px';
});

document.querySelector('.houses-next2').addEventListener('click', function(){
    Offset = Offset + 300;

    if (width2 === 900) {if (Offset >= 2100) {Offset = 0;}};
    if (width2 === 600) {if (Offset >= 2400) {Offset = 0;}};
    if (width2 === 300) {if (Offset >= 2700) {Offset = 0;}};

    houses2.style.left = -Offset + 'px';
});

document.querySelector('.houses-prev2').addEventListener('click', function () {
    Offset = Offset - 300;

    if (width2 === 900) {if (Offset < 0) {Offset = 1800;}};
    if (width2 === 600) {if (Offset < 0) {Offset = 2100;}};
    if (width2 === 300) {if (Offset < 0) {Offset = 2400;}};

    houses2.style.left = -Offset + 'px';
});

document.querySelector('.houses-next3').addEventListener('click', function(){
    Offset = Offset + 300;

    if (width3 === 900) {if (Offset >= 2100) {Offset = 0;}};
    if (width3 === 600) {if (Offset >= 2400) {Offset = 0;}};
    if (width3 === 300) {if (Offset >= 2700) {Offset = 0;}};

    houses3.style.left = -Offset + 'px';
});

document.querySelector('.houses-prev3').addEventListener('click', function () {
    Offset = Offset - 300;

    if (width3 === 900) {if (Offset < 0) {Offset = 1800;}};
    if (width3 === 600) {if (Offset < 0) {Offset = 2100;}};
    if (width3 === 300) {if (Offset < 0) {Offset = 2400;}};

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