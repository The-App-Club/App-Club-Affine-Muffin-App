import {scale, rotate, translate, compose} from 'transformation-matrix';

function matrixObject2Tuple(o) {
  return `${o.a},${o.b},${o.c},${o.d},${o.e},${o.f}`;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function randomRangeNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let itemDomList = [];
function setUp() {
  for (let index = 0; index < 100; index++) {
    const divDom = document.createElement('div');
    divDom.classList.add('item');
    document.querySelector('.container').appendChild(divDom);
  }
  itemDomList = [...document.querySelectorAll('.item')];
}

function niceRolling() {
  let count = 0;
  let moveX = 0;

  function marquee() {
    function mod(n, m) {
      return ((n % m) + m) % m;
    }
    moveX++;
    requestAnimationFrame(marquee);
    if (mod(moveX, 60) + 1 === 60) {
      count = count + 1;

      for (let index = 0; index < itemDomList.length; index++) {
        const itemDom = itemDomList[index];
        const _angle = (count * 100) % 360;
        const _scale = clamp(((count * index) / 3) % 3, 1, 3);
        const matrix = compose(
          translate(randomRangeNumber(-300, 300), randomRangeNumber(-300, 300)),
          rotate(deg2rad(_angle)),
          scale(_scale, _scale)
        );
        itemDom.style.transform = `matrix(${matrixObject2Tuple(matrix)})`;
      }
    }
  }
  marquee();
}

setUp();
niceRolling();
