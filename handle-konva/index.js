// https://stackoverflow.com/questions/64690514/creating-a-resizable-draggable-rotate-view-in-javascript
// https://konvajs.org/api/Konva.Node.html#on__anchor
import Konva from 'konva';

async function a() {
  const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const layer = new Konva.Layer();
  stage.add(layer);
  const rect1 = new Konva.Rect({
    x: 60,
    y: 60,
    width: 100,
    height: 90,
    fill: 'red',
    name: 'rect',
    draggable: true,
  });

  layer.add(rect1);
  const tr = new Konva.Transformer();
  layer.add(tr);
  tr.nodes([rect1]);
  layer.draw();
  rect1.on('mousemove', (event) => {
    console.log(event);
  });
}

a();
