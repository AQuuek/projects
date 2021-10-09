
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