var ol = document.querySelector('ol');
var lis = document.querySelectorAll('li');

Array.from(lis).map(function (li) {
  li.setAttribute('class', 'red');
})

var nextLi = document.createElement('li');
nextLi.innerHTML = 'JavaScript';
ol.appendChild(nextLi);
