
//modal

document.body.onclick = function (event) {
  event = event || window.event;
  if (event.target.classList.contains('img-product-item')) {
    document.getElementById('img-product-max').src = event.target.src;
  }
}


let modal = document.getElementById('myModal'),
    btn = document.getElementById("popupBtn"),
    span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}