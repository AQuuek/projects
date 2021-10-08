
//load template

let headerText = '<div class="d-flex align-items-center"><div> <img class="img-fluid logo" src="assets/img/index/logo.png" alt="logo"> </div> <div class="ms-auto d-none d-xl-flex social-icon-box"><a href="#"><img class="social-icon" src="assets/img/icon/twiter.png" alt="twiter"></a><a href="#"><img class="social-icon" src="assets/img/icon//Gmail.png" alt="Gmail"></a><a href="#"><img class="social-icon" src="assets/img/icon/WhatsUp.png" alt="WhatsUp"></a><a href="#"><img class="social-icon" src="assets/img/icon/facebook.png" alt="facebook"></a></div></div><nav class="navbar navbar-expand-lg navbar-dark p-0" style="background-color: #00043c;"><a class="navbar-brand" href="#" style="padding-left: 2em !important; color: #e9e9e9 !important;">Меню</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="margin: 1em !important;"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><a class="nav-link p-0" aria-current="page" href="index.html"><li class="nav-item nav-active">Главная</li></a><a class="nav-link p-0" href="house.html"><li class="nav-item">Дома</li></a><a class="nav-link p-0" href="about.html"><li class="nav-item">О нас</li></a><a class="nav-link p-0" href="contact.html"><li class="nav-item">Контакты</li></a></ul></d</nav>'

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
		
//offering script

		let offerTitle = document.querySelector('.offering-animate'),
		offerTop = offerTitle.getBoundingClientRect().top;
		
		let labels2 = document.querySelectorAll('.label-box2'),
		labels3 = document.querySelectorAll('.label-box3');

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > offerTop - window.innerHeight / 10) {
				offerTitle.style.right = 0;
				labels2[0].style.transform = 'rotateZ(6deg)';
				labels2[1].style.transform = 'rotateZ(6deg)';
				labels2[2].style.transform = 'rotateZ(6deg)';
				labels3[0].style.transform = 'rotateZ(5deg) skew(-30deg)';
				labels3[1].style.transform = 'rotateZ(5deg) skew(-30deg)';
				labels3[2].style.transform = 'rotateZ(5deg) skew(-30deg)';
				this.removeEventListener('scroll', onScroll);
			}
		});

		//state script

		let number = document.querySelector('.number'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				let interval = setInterval(function() {
					number.innerHTML = ++start;
					if(start == end) {
						clearInterval(interval);
					}
				}, 200);
			}
		});

		let number1 = document.querySelector('.number1'),
		number1Top = number1.getBoundingClientRect().top,
		start1 = +number1.innerHTML, end1 = +number1.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number1Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				let interval1 = setInterval(function() {
					number1.innerHTML = ++start1;
					if(start1 == end1) {
						clearInterval(interval1);
					}
				}, 10);
			}
		});

		let number2 = document.querySelector('.number2'),
		number2Top = number2.getBoundingClientRect().top,
		start2 = +number2.innerHTML, end2 = +number2.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number2Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				let interval2 = setInterval(function() {
					number2.innerHTML = ++start2;
					if(start2 == end2) {
						clearInterval(interval2);
					}
				}, 75);
			}
		});

let number3 = document.querySelector('.number3'),
		number3Top = number3.getBoundingClientRect().top,
		start3 = +number3.innerHTML, end3 = +number3.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number3Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				let interval3 = setInterval(function() {
					number3.innerHTML = ++start3;
					if(start3 == end3) {
						clearInterval(interval3);
					}
				}, 250);
			}
		});

//reviews script

let offset = 0;
const reviews = document.querySelector('.reviews');
let btnReviews1 = document.querySelector('.btnReviews1')
let btnReviews2 = document.querySelector('.btnReviews2')
let btnReviews3 = document.querySelector('.btnReviews3')

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 470;

    if (offset > 0) {
    	btnReviews1.style.backgroundColor = '#fff';
    }

    if (offset === 470) {
    	btnReviews2.style.backgroundColor = '#000';
    } else {
    	btnReviews2.style.backgroundColor = '#fff'
    }    

    if (offset === 940) {
    	btnReviews3.style.backgroundColor = '#000';
    } else {
    	btnReviews3.style.backgroundColor = '#fff'
    }

    if (offset > 940) {
        offset = 0;
        btnReviews1.style.backgroundColor = '#000';
    }
    reviews.style.left = -offset + 'px';


});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 470;

    if (offset === 0) {
    	btnReviews1.style.backgroundColor = '#000';
    } else {
    	btnReviews1.style.backgroundColor = '#fff';
    }

    if (offset === -470) {
    	btnReviews3.style.backgroundColor = '#000';
    } else {
    	btnReviews3.style.backgroundColor = '#fff'
    }

    if (offset === 470) {
    	btnReviews2.style.backgroundColor = '#000';
    } else {
    	btnReviews2.style.backgroundColor = '#fff'
    }    



    if (offset < 0) {
        offset = 940;
    }
    reviews.style.left = -offset + 'px';
});