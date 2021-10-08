
//load template

let headerText = '<div class="d-flex align-items-center"><div> <img class="img-fluid logo" src="assets/img/index/logo.png" alt="logo"> </div> <div class="ms-auto d-none d-xl-flex social-icon-box"><a href="#"><img class="social-icon" src="assets/img/icon/twiter.png" alt="twiter"></a><a href="#"><img class="social-icon" src="assets/img/icon//Gmail.png" alt="Gmail"></a><a href="#"><img class="social-icon" src="assets/img/icon/WhatsUp.png" alt="WhatsUp"></a><a href="#"><img class="social-icon" src="assets/img/icon/facebook.png" alt="facebook"></a></div></div><nav class="navbar navbar-expand-lg navbar-dark p-0" style="background-color: #00043c;"><a class="navbar-brand" href="#" style="padding-left: 2em !important; color: #e9e9e9 !important;">Меню</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="margin: 1em !important;"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><a class="nav-link p-0" aria-current="page" href="index.html"><li class="nav-item">Главная</li></a><a class="nav-link p-0" href="house.html"><li class="nav-item">Дома</li></a><a class="nav-link p-0" href="about.html"><li class="nav-item nav-active">О нас</li></a><a class="nav-link p-0" href="contact.html"><li class="nav-item">Контакты</li></a></ul></d</nav>'

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

 
 //animate text

   let animateText1 = document.querySelector('.about-text1'),
       animateText2 = document.querySelector('.about-text2'),
       animateTextTop = animateText1.getBoundingClientRect().top;

       window.addEventListener('scroll', function onScroll() {
          if(window.pageYOffset > animateTextTop - window.innerHeight / 2) {
            animateText1.style.left = 0;
            animateText2.style.left = 0;
          }
       });

//google map

    function initMap() {
      let opt = {
        center: {lat: 45.148259 , lng: 39.015840}, 
        zoom: 10,
      };

      let myMap = new google.maps.Map(document.getElementById("map"), opt);
//1
      let marker1 = new google.maps.Marker ({
        position: {lat: 45.162727, lng: 39.014619},
        map: myMap,
        title: "Наш проект",
        icon: 'assets/img/icon/icon-map.png'
      });

      let info1 = new google.maps.InfoWindow({
        content: '<img class = "img-map" src="assets/img/house/1house1.png" alt="Дом 1"> <h5 class = "title-map">Проект №1</h5> <p class = "text-map">Наш проект построенный в 2020 году. При строительстве использовались дорогостоящие материалы и профессиональные рабочие.</p>'
      });

      marker1.addListener("mouseover", function() {
        info1.open(myMap, marker1);
      });
      marker1.addListener("mouseout", function() {
        info1.close(myMap, marker1);
      });

//2

      let marker2 = new google.maps.Marker ({
        position: {lat: 45.128139, lng: 38.905860},
        map: myMap,
        title: "Наш проект",
        icon: 'assets/img/icon/icon-map.png'
      });

      let info2 = new google.maps.InfoWindow({
        content: '<img class = "img-map" src="assets/img/house/1house3.png" alt="Дом 2"> <h5 class = "title-map">Проект №3</h5> <p class = "text-map">Наш проект построенный в 2020 году. При строительстве использовались дорогостоящие материалы и профессиональные рабочие.</p>'
      });

      marker2.addListener("mouseover", function() {
        info2.open(myMap, marker2);
      });
      marker2.addListener("mouseout", function() {
        info2.close(myMap, marker2);
      });     

//3
      let marker3 = new google.maps.Marker ({
        position: {lat: 44.974503, lng: 38.946598},
        map: myMap,
        title: "Наш проект",
        icon: 'assets/img/icon/icon-map.png'
      });

      let info3 = new google.maps.InfoWindow({
        content: '<img class = "img-map" src="assets/img/house/1house5.png" alt="Дом 3"> <h5 class = "title-map">Проект №5</h5> <p class = "text-map">Наш проект построенный в 2020 году. При строительстве использовались дорогостоящие материалы и профессиональные рабочие.</p>'
      });

      marker3.addListener("mouseover", function() {
        info3.open(myMap, marker3);
      });
      marker3.addListener("mouseout", function() {
        info3.close(myMap, marker3);
      });     

//4
      let marker4 = new google.maps.Marker ({
        position: {lat: 45.052230, lng: 38.821841},
        map: myMap,
        title: "Наш проект",
        icon: 'assets/img/icon/icon-map.png'
      });

      let info4 = new google.maps.InfoWindow({
        content: '<img class = "img-map" src="assets/img/house/2house1.png" alt="Дом 4"> <h5 class = "title-map">Проект №6</h5> <p class = "text-map">Наш проект построенный в 2020 году. При строительстве использовались дорогостоящие материалы и профессиональные рабочие.</p>'
      });

      marker4.addListener("mouseover", function() {
        info4.open(myMap, marker4);
      });
      marker4.addListener("mouseout", function() {
        info4.close(myMap, marker4);
      });     

//5
      let marker5 = new google.maps.Marker ({
        position: {lat: 45.173088, lng: 39.092926},
        map: myMap,
        title: "Наш проект",
        icon: 'assets/img/icon/icon-map.png'
      });

      let info5 = new google.maps.InfoWindow({
        content: '<img class = "img-map" src="assets/img/house/2house2.png" alt="Дом 1"> <h5 class = "title-map">Проект №7</h5> <p class = "text-map">Наш проект построенный в 2020 году. При строительстве использовались дорогостоящие материалы и профессиональные рабочие.</p>'
      });

      marker5.addListener("mouseover", function() {
        info5.open(myMap, marker5);
      });
      marker5.addListener("mouseout", function() {
        info5.close(myMap, marker5);
      });     

      }