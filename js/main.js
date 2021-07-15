console.log('hello');
var plus = document.querySelectorAll('.btn-plus');
var counter = document.querySelectorAll('.counter');
var minus = document.querySelectorAll('.btn-minus');
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    counter[i].innerText++;
     total();
  });

  minus[i].addEventListener('click', function () {
    if (counter[i].innerText > 0) counter[i].innerText--;
     total();
  });
}
var heartBtn = document.querySelectorAll(".heartBtn");
var heart = document.querySelectorAll('.fas.fa-heart');
for(let i = 0;i<heartBtn.length;i++){
heartBtn[i].addEventListener('click', function () {
  if(heart[i].style.color == 'blue'){
     heart[i].style.color ='black'
  }
  else{
      heart[i].style.color = 'blue';   
  }
  })
}

 
 function total() {
  var totalPrice = document.getElementById('totalPrice');
  var quantity = document.getElementsByClassName('counter');
  var price = document.getElementsByClassName('price');
  var sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    sum += counter[i].innerText * price[i].innerText;
  }
  totalPrice.innerText = sum;
}
total() 
