$(document).ready(function () {
  $(".menu__burger").click(function (event) {
    $(".menu__burger, .menu__list").toggleClass("active");
    $(".body").toggleClass("lock");
  });
});
document.addEventListener("mousemove", function(e){
  const ball1 = document.querySelector('.ball--1');
  const ball2 = document.querySelector('.ball--2');
  const ball3 = document.querySelector('.ball--3');
  const ball4 = document.querySelector('.ball--4');
  const ball5 = document.querySelector('.ball--5');
  const ball6 = document.querySelector('.ball--6');
  const ball7 = document.querySelector('.ball--7');
  const ball8 = document.querySelector('.ball--8');

  const net1 = document.querySelector('.network--1');
  const net2 = document.querySelector('.network--2');
  const net3 = document.querySelector('.network--3');

  ball1.style.left = 20 - e.pageX/100 + '%';
  ball2.style.left = 97 - e.pageX/50 + '%';
  ball3.style.left = 70 - e.pageX/70 + '%';
  ball4.style.left = 40 - e.pageX/30 + '%';
  ball5.style.left = 95 - e.pageX/150 + '%';
  ball6.style.left = 60 - e.pageX/50 + '%';
  ball7.style.left = 10 - e.pageX/200 + '%';
  ball8.style.left = 75 - e.pageX/100 + '%';

  ball1.style.top = 10 - e.pageY/70 + '%';
  ball2.style.top = 25 - e.pageY/50 + '%';
  ball3.style.top = 65 - e.pageY/30 + '%';
  ball4.style.top = 50 - e.pageY/50 + '%';
  ball5.style.top = 60 - e.pageY/30 + '%';
  ball6.style.top = 45 - e.pageY/50 + '%';
  ball7.style.top = 80 - e.pageY/70 + '%';
  ball8.style.top = 90 - e.pageY/100 + '%';

  net1.style.left = 80 - e.pageX/100 + '%';
  net2.style.left = 17 - e.pageX/90 + '%';
  net3.style.left = 55 - e.pageX/100 + '%';

  net1.style.top = 20 - e.pageY/70 + '%';
  net2.style.top = 30 - e.pageY/100 + '%';
  net3.style.top = 70 - e.pageY/50 + '%';

})