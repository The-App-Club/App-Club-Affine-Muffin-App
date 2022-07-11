import * as p5 from 'p5';

const mycode = (p, isDebug = true) => {
  let angle = 0;

  p.setup = () => {
    p.createCanvas(640, 360);
  };

  p.draw = () => {
    p.clear();
    p.background(220);

    p.applyMatrix(1, 0, 0, 1, p.width / 2, p.height / 2);

    p.applyMatrix(2, 0, 0, 2, 0, 0);

    p.applyMatrix(
      p.cos(angle),
      p.sin(angle),
      -p.sin(angle),
      p.cos(angle),
      0,
      0
    );

    p.circle(100, 0, 20);

    angle += 0.02;
  };
};

let isDebug = false;

const myp5 = new p5((p) => {
  mycode(p, isDebug);
});
