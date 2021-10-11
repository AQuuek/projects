
		
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

let offset = 0,
 	reviews = document.querySelector('.reviews'),
	btnReviews1 = document.querySelector('.btnReviews1'),
	btnReviews2 = document.querySelector('.btnReviews2'),
	btnReviews3 = document.querySelector('.btnReviews3');
let screenWidth = window.screen.width


if (screenWidth > 500) {

	document.querySelector('.slider-next').addEventListener('click', function() {
    	offset = offset + 470;

    	if (offset > 0) {btnReviews1.style.backgroundColor = '#fff';}

    	if (offset === 470) {btnReviews2.style.backgroundColor = '#000';} 
    	else {btnReviews2.style.backgroundColor = '#fff'}    

    	if (offset === 940) {btnReviews3.style.backgroundColor = '#000';} 
    	else {btnReviews3.style.backgroundColor = '#fff'}

    	if (offset > 940) {
       		offset = 0;
        	btnReviews1.style.backgroundColor = '#000';
    	}

    	reviews.style.left = -offset + 'px';
	});

	document.querySelector('.slider-prev').addEventListener('click', function () {
    	offset = offset - 470;

    	if (offset === 0) {btnReviews1.style.backgroundColor = '#000';} 
    	else {btnReviews1.style.backgroundColor = '#fff';}

    	if (offset === -470) {btnReviews3.style.backgroundColor = '#000';} 
    	else {btnReviews3.style.backgroundColor = '#fff'}

    	if (offset === 470) {btnReviews2.style.backgroundColor = '#000';} 
    	else {btnReviews2.style.backgroundColor = '#fff'}    

    	if (offset < 0) {offset = 940;}

    	reviews.style.left = -offset + 'px';
	});
};

if (screenWidth < 500) {

	document.querySelector('.slider-next').addEventListener('click', function() {
    	offset = offset + 340;

    	if (offset > 0) {btnReviews1.style.backgroundColor = '#fff';}

    	if (offset === 340) {btnReviews2.style.backgroundColor = '#000';} 
    	else {btnReviews2.style.backgroundColor = '#fff'}    

    	if (offset === 680) {btnReviews3.style.backgroundColor = '#000';} 
    	else {btnReviews3.style.backgroundColor = '#fff'}

    	if (offset > 680) {
       		offset = 0;
        	btnReviews1.style.backgroundColor = '#000';
    	}
    	
    	reviews.style.left = -offset + 'px';
	});

	document.querySelector('.slider-prev').addEventListener('click', function () {
    	offset = offset - 340;

    	if (offset === 0) {btnReviews1.style.backgroundColor = '#000';} 
    	else {btnReviews1.style.backgroundColor = '#fff';}

    	if (offset === -340) {btnReviews3.style.backgroundColor = '#000';} 
    	else {btnReviews3.style.backgroundColor = '#fff'}

    	if (offset === 340) {btnReviews2.style.backgroundColor = '#000';} 
    	else {btnReviews2.style.backgroundColor = '#fff'}    

    	if (offset < 0) {offset = 680;}

    	reviews.style.left = -offset + 'px';
	});
};



///////

/*let Offset = 0;

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
*/